import { useEffect, useState } from 'react';

const LOGO_SRC = 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png';

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    // Phase 1 — enter animations play (0 → 800ms)
    const holdTimer = setTimeout(() => setPhase('hold'), 800);
    // Phase 2 — hold for 1.6s
    const exitTimer = setTimeout(() => setPhase('exit'), 2400);
    // Phase 3 — exit fade plays (400ms), then unmount
    const doneTimer = setTimeout(() => onDone(), 2900);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`splash-shell splash--${phase}`} aria-hidden="true">

      {/* Animated dot grid background */}
      <div className="splash-dots" />

      {/* Ripple rings */}
      <div className="splash-rings">
        <span className="splash-ring splash-ring--1" />
        <span className="splash-ring splash-ring--2" />
        <span className="splash-ring splash-ring--3" />
      </div>

      {/* Centre content */}
      <div className="splash-centre">

        {/* Logo circle */}
        <div className="splash-logo-wrap">
          <div className="splash-logo-ring" />
          <div className="splash-logo-circle">
            <img src={LOGO_SRC} alt="Kalinga Fish Farm logo" />
          </div>
        </div>

        {/* Text */}
        <div className="splash-text">
          <h1 className="splash-brand">Kalinga Fish Farm</h1>
          <p className="splash-sub">Premium Freshwater Aquaculture · Iringa, Tanzania</p>
        </div>

        {/* Loading bar */}
        <div className="splash-bar-track">
          <div className="splash-bar-fill" />
        </div>

        <p className="splash-hint">Preparing your experience…</p>
      </div>
    </div>
  );
}
