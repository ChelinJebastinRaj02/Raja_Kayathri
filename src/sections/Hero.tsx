import { useEffect, useState } from 'react';
import { useCountdown } from '../hooks/useCountdown';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const weddingDate = new Date('2026-04-20T16:30:00');
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToEvents = () => {
    const element = document.querySelector('#events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className={`relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#faf7f2] text-[#1a1410] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* decorative */}
        <div className="ornament-line left"></div>
        <div className="ornament-line right"></div>
        <div className="corner tl"></div>
        <div className="corner tr"></div>
        <div className="corner bl"></div>
        <div className="corner br"></div>

        {/* watermark cross */}
        <svg className="hero-cross" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="44" y="5" width="12" height="90" fill="#b8922a"/>
          <rect x="15" y="28" width="70" height="12" fill="#b8922a"/>
        </svg>

        <span className="hero-pretitle">With God's Grace, We Invite You</span>

        <div className="hero-names">
          <span className="name">Jesu Raja</span>
          <span className="ampersand">&amp;</span>
          <span className="name">Lekshmi Kayathri</span>
        </div>

        <div className="hero-divider">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line r"></div>
        </div>

        <div className="hero-date">April 2026</div>
        <div className="hero-location">Nagercoil · Tamil Nadu · Kanyakumari</div>

        <button onClick={scrollToEvents} className="scroll-hint cursor-pointer bg-transparent border-none">
          <span>Scroll to Celebrate</span>
          <div className="scroll-arrow"></div>
        </button>
      </section>

      {/* COUNTDOWN */}
      <div id="countdown-section">
        <span className="countdown-label">Counting Down to Forever</span>
        <div className="countdown-grid">
          <div className="countdown-item">
            <span className="countdown-num" id="cd-days">{String(days).padStart(2, '0')}</span>
            <span className="countdown-unit">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-num" id="cd-hours">{String(hours).padStart(2, '0')}</span>
            <span className="countdown-unit">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-num" id="cd-mins">{String(minutes).padStart(2, '0')}</span>
            <span className="countdown-unit">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-num" id="cd-secs">{String(seconds).padStart(2, '0')}</span>
            <span className="countdown-unit">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
}
