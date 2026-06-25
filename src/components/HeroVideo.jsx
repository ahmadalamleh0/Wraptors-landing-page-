import { useEffect, useRef } from 'react';

// Autoplaying background video with a mobile-safe fallback: browsers (most
// notably iOS Safari) can silently block autoplay even with muted+playsInline,
// so we retry play() on mount and again on the first touch/click. If it never
// plays, the poster image just stays put — no broken/blank state either way.
export default function HeroVideo({ src, poster, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Respect reduced-motion: leave the poster image as the static state.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Autoplay blocked, poster fallback will remain visible.');
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      playVideo();
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
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
      preload="auto"
      poster={poster}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
