import { useEffect, useRef, useState } from 'react';

// The opening fraction of a second of the source footage is soft/blurry
// (the drone shot hasn't settled yet) — start playback a little past it.
const SKIP_BLUR_SECONDS = 0.5;
// Anything 768px+ gets the horizontal desktop video; below that stays mobile.
const DESKTOP_QUERY = '(min-width: 768px)';

export default function HeroVideo({ src, poster, desktopSrc, desktopPoster, className }) {
  const videoRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [ready, setReady] = useState(false);

  // Resolve once at mount — never swap mid-session (would cause a reload flash).
  const isDesktop = useRef(
    desktopSrc != null && window.matchMedia(DESKTOP_QUERY).matches
  );
  const activeSrc    = isDesktop.current ? desktopSrc    : src;
  const activePoster = isDesktop.current && desktopPoster ? desktopPoster : poster;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Respect reduced-motion: leave the poster image as the static state.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Set as JS properties too — some mobile browsers ignore the HTML
    // attribute alone. Do NOT call video.load() here: it resets the
    // element and cancels the browser's own autoplay attempt, which on
    // real iOS Safari means play() is then treated as a non-autoplay
    // call and silently blocked until the user taps.
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    function skipBlurryStart() {
      if (video.currentTime < SKIP_BLUR_SECONDS) {
        video.currentTime = SKIP_BLUR_SECONDS;
      }
    }

    const playVideo = async () => {
      if (!video.paused) return; // already playing, don't interrupt
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log('Autoplay blocked, poster fallback will remain visible.');
      }
    };

    function handleLoadedMetadata() {
      skipBlurryStart();
      playVideo();
    }

    function handlePlaying() {
      setReady(true);
    }

    // `loop` is handled natively, so there's no event for "just restarted" —
    // detect it by watching for currentTime dropping back near zero, and
    // skip the blurry opening again on every cycle, not just the first.
    function handleTimeUpdate() {
      if (video.currentTime < 0.15 && lastTimeRef.current > 1) {
        video.currentTime = SKIP_BLUR_SECONDS;
      }
      lastTimeRef.current = video.currentTime;
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', playVideo);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('timeupdate', handleTimeUpdate);

    const handleUserInteraction = () => {
      playVideo();
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <>
      <img src={activePoster} alt="" className={className} aria-hidden="true" />
      <video
        ref={videoRef}
        className={className}
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.8s ease' }}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        controls={false}
        preload="auto"
        poster={activePoster}
        aria-hidden="true"
      >
        <source src={activeSrc} type="video/mp4" />
      </video>
    </>
  );
}
