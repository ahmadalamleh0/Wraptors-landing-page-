import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';
import WraptorsMafiaLogo from './WraptorsMafiaLogo';
import DubaiEditionLine from './DubaiEditionLine';

export default function Hero() {
  const sectionRef     = useRef(null);
  const lockupRef      = useRef(null);
  const editionLineRef = useRef(null);
  const logoWrapRef   = useRef(null);
  const logoClipRef   = useRef(null);  // clips the SVG; blade is sibling, not clipped
  const logoImgRef    = useRef(null);
  const bladeRef      = useRef(null);
  const sweepGlowRef  = useRef(null);
  const topTextRef    = useRef(null);
  const brandRuleRef  = useRef(null);
  const bottomTextRef = useRef(null);
  const estRef        = useRef(null);
  const yearRef       = useRef(null);
  const scrollRef     = useRef(null);

  useEffect(() => {
    const lockup     = lockupRef.current;
    const editionLine = editionLineRef.current;
    const logoClip  = logoClipRef.current;
    const img       = logoImgRef.current;
    const blade     = bladeRef.current;
    const sweepGlow = sweepGlowRef.current;
    const topTxt    = topTextRef.current;
    const brandRule = brandRuleRef.current;
    const botTxt    = bottomTextRef.current;
    const est       = estRef.current;
    const year      = yearRef.current;
    const section   = sectionRef.current;

    // ── 1. Initial states ─────────────────────────────────────────────
    gsap.set(lockup,   { opacity: 0 });
    gsap.set(editionLine, { opacity: 0, x: 5, y: -12 });
    gsap.set(logoClip, { clipPath: 'inset(0 0 100% 0)' }); // hidden; reveals top-to-bottom
    gsap.set(img,      { filter: 'brightness(1.0)' });
    gsap.set(blade,    { top: '0%', opacity: 0 });
    gsap.set(sweepGlow, { left: '-8%', opacity: 0 });
    gsap.set(topTxt,   { clipPath: 'inset(0 0 100% 0)', opacity: 0 });
    gsap.set(botTxt,   { clipPath: 'inset(0 0 100% 0)', opacity: 0 });
    gsap.set(brandRule,    { scaleX: 0, opacity: 0 });
    gsap.set([est, year],  { opacity: 0 });
    gsap.set(scrollRef.current, { opacity: 0 });

    // ── 2. Reveal timeline ────────────────────────────────────────────
    const reveal = gsap.timeline();

    // Lockup becomes active against pure black
    reveal.to(lockup, { opacity: 1, duration: 0.06, ease: 'none' }, 0.08);

    // Blade appears at top edge of logo
    reveal.to(blade, { opacity: 1, duration: 0.07, ease: 'none' }, 0.14);

    // Blade cuts downward; logo clips in exactly in sync — engraved into screen
    reveal.to(blade,    { top: '100%',                duration: 0.76, ease: 'power1.inOut' }, 0.20);
    reveal.to(logoClip, { clipPath: 'inset(0 0 0% 0)', duration: 0.76, ease: 'power1.inOut' }, 0.20);

    // Blade exits — brief gleam as the cut completes, then settles pure white
    reveal.to(blade, { opacity: 0, duration: 0.07, ease: 'none' }, 0.94);
    reveal.to(img,   { filter: 'brightness(1.14)', duration: 0.11, ease: 'none' }, 0.92);
    reveal.to(img,   { filter: 'brightness(1.0)',  duration: 0.45, ease: 'power2.out' }, 1.04);

    // Dubai Edition mark — settles in above the wordmark, quiet and unhurried
    reveal.to(editionLine, { opacity: 1, y: -6, duration: 0.38, ease: 'power2.out' }, 1.06);

    // Shine pass — a soft light streak glides across the settled white mark.
    reveal.to(sweepGlow, { opacity: 1, duration: 0.18, ease: 'none' }, 1.12);
    reveal.to(sweepGlow, {
      left: '108%',
      duration: 0.95,
      ease: 'power2.inOut',
    }, 1.12);
    reveal.to(sweepGlow, { opacity: 0, duration: 0.22, ease: 'none' }, 1.85);

    // "WRAPTORS MAFIA" — etched downward, same cut technique
    reveal.to(topTxt, {
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.36,
      ease: 'power2.inOut',
    }, 1.26);

    // Hairline rule — drawn from center out
    reveal.to(brandRule, {
      opacity: 1,
      scaleX: 1,
      duration: 0.25,
      ease: 'power2.inOut',
      transformOrigin: 'center',
    }, 1.65);

    // "LOYALTY OVER ROYALTY"
    reveal.to(botTxt, {
      opacity: 1,
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.31,
      ease: 'power2.out',
    }, 1.88);

    // EST. / 2016 — quiet, last to appear
    reveal.to(est,  { opacity: 1, duration: 0.28, ease: 'power1.out' }, 2.18);
    reveal.to(year, { opacity: 1, duration: 0.28, ease: 'power1.out' }, 2.30);

    // Scroll cue
    reveal.to(scrollRef.current, { opacity: 1, duration: 0.53, ease: 'power1.out' }, 2.44);

    // Trim the whole reveal's pace — same choreography, just snappier overall.
    reveal.timeScale(1.9);

    const tl = gsap.timeline();
    tl.add(reveal);

    // ── 3. Exit: slide overlay upward ─────────────────────────────────
    // Runs only once the full reveal has played — no early skip on
    // scroll/touch, so everything always gets displayed first.
    let exitTween = null;

    function runExit() {
      if (!section) return;
      exitTween = gsap.to(section, {
        y: '-100%',
        duration: 1.2,
        ease: 'power3.inOut',
        onComplete: () => {
          if (sectionRef.current) sectionRef.current.style.display = 'none';
          window.dispatchEvent(new CustomEvent('hero:exit'));
        },
      });
    }

    tl.call(runExit, null, '+=0.4');

    return () => {
      tl.kill();
      if (exitTween) exitTween.kill();
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>

      <div ref={lockupRef} className={styles.lockup}>

        <DubaiEditionLine ref={editionLineRef} className={styles.editionLine} />

        <div className={styles.logoRow}>
          <span ref={estRef} className={styles.sideText}>EST.</span>

          <div ref={logoWrapRef} className={styles.logoWrap}>
            {/* logoClip is clipped; blade is a sibling so it stays visible */}
            <div ref={logoClipRef} className={styles.logoClip}>
              <WraptorsMafiaLogo ref={logoImgRef} className={styles.badgeImg} />
            </div>
            <div ref={bladeRef} className={styles.engraveBlade} aria-hidden="true" />

            {/* Shine pass — a quiet light streak, no color change */}
            <div ref={sweepGlowRef} className={styles.sweepGlow} aria-hidden="true" />
          </div>

          <span ref={yearRef} className={styles.sideText}>2016</span>
        </div>

        <p ref={topTextRef} className={styles.topText}>WRAPTORS MAFIA</p>
        <div ref={brandRuleRef} className={styles.brandRule} aria-hidden="true" />
        <p ref={bottomTextRef} className={styles.bottomText}>LOYALTY&nbsp;OVER&nbsp;ROYALTY</p>

        <div ref={scrollRef} className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollText}>SCROLL</span>
          <span className={styles.scrollBar} />
          <span className={styles.scrollDot} />
        </div>

      </div>

    </section>
  );
}
