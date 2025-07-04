import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./ss.png"; // Logo image
import instagramLogo from "./instagram.png"; // Instagram icon

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className="content">
        {/* Logo Image */}
        <img src={logo} alt="Ilyrian Studio Logo" className="logo" />

        {/* Studio Title */}
        <h1 className="studio-title">
          <span className="ilyrian">Ilyrian</span>
          <span className="studio">Studio</span>
        </h1>

        {/* Centered Divider */}
        <hr className="divider" />

        {/* Coming Soon Text */}
        <p className="coming-soon">Coming Soon</p>

        {/* Countdown Timer */}
        <div className="countdown">
          <div>
            <strong>{timeLeft.days}</strong>
            <span>Days</span>
          </div>
          <div>
            <strong>{timeLeft.hours}</strong>
            <span>Hours</span>
          </div>
          <div>
            <strong>{timeLeft.minutes}</strong>
            <span>Minutes</span>
          </div>
          <div>
            <strong>{timeLeft.seconds}</strong>
            <span>Seconds</span>
          </div>
        </div>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/ilyrianstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img src={instagramLogo} alt="Instagram" />
          Follow us on Instagram
        </a>
      </div>

      {/* Footer */}
      <footer>&copy; 2025 IlyrianStudio. All rights reserved.</footer>
    </div>
  );
}

export default App;
