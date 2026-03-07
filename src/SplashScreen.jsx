import { useEffect, useState } from 'react';

const LOGO_SRC = 'https://res.cloudinary.com/diyy8h0d9/image/upload/f_auto,q_auto/v1771859623/kalinga_-_fish_farming_p1aof7.png';

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'hold' | 'exit'

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase('hold'), 800);
    const exitTimer = setTimeout(() => setPhase('exit'), 9500);
    const doneTimer = setTimeout(() => onDone(), 10000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`splash-shell splash--${phase}`} aria-hidden="true">

      {/* Deep background layers */}
      <div className="splash-bg">
        <div className="splash-bg__grad" />
        <div className="splash-bg__orb splash-bg__orb--teal" />
        <div className="splash-bg__orb splash-bg__orb--blue" />
        <div className="splash-dots" />
      </div>

      {/* Ripple rings */}
      <div className="splash-rings">
        <span className="splash-ring splash-ring--1" />
        <span className="splash-ring splash-ring--2" />
        <span className="splash-ring splash-ring--3" />
      </div>

      {/* Centre content */}
      <div className="splash-centre">

        {/* Badge chip */}
        <div className="splash-badge">
          <span className="splash-badge__dot" />
          Est. 2014 · Iringa, Tanzania
        </div>

        {/* Logo circle */}
        <div className="splash-logo-wrap">
          <div className="splash-logo-ring" />
          <div className="splash-logo-ring splash-logo-ring--outer" />
          <div className="splash-logo-circle">
            <img src={LOGO_SRC} alt="Kalinga Fish Farm logo" />
          </div>
        </div>

        {/* Text */}
        <div className="splash-text">
          <h1 className="splash-brand">Kalinga Fish Farm</h1>
          <p className="splash-sub">Premium Freshwater Aquaculture · Iringa, Tanzania</p>
        </div>

        {/* Divider */}
        <div className="splash-divider" />

        {/* Loading bar */}
        <div className="splash-bar-track">
          <div className="splash-bar-fill">
            <div className="splash-bar-sheen" />
          </div>
        </div>

        {/* Hint */}
        <p className="splash-hint">
          <span className="splash-hint__dot" />
          Preparing your experience…
        </p>
      </div>
    </div>
  );
}
