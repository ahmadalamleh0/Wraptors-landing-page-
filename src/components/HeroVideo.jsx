import { useEffect, useRef } from 'react';

// Autoplaying background video with a mobile-safe fallback. Real mobile
// browsers (iOS Safari, Android Chrome, in-app webviews) can silently block
// autoplay even with muted+playsInline, and when that happens the browser
// falls back to its native paused player — which letterboxes to the video's
// raw aspect ratio instead of respecting our object-fit:cover. So we go out
// of our way to make sure muted+inline actually "stick" before play() is
// attempted, then retry on mount, on canplay, and on first touch/click.
export default function HeroVideo({ src, poster, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Respect reduced-motion: leave the poster image as the static state.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Some mobile browsers only honor the JS property, not just the HTML
    // attribute — set both explicitly before every play() attempt.
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.load();

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log('Autoplay blocked, poster fallback will remain visible.');
      }
    };

    playVideo();

    // Retry once the browser actually has enough data — on a slow connection
    // the very first attempt can fire before the video is playable yet.
    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('canplay', playVideo);

    const handleUserInteraction = () => {
      playVideo();
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('canplay', playVideo);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      disablePictureInPicture
      controls={false}
      preload="auto"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
