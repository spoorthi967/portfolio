import React, { useMemo, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

// Pages
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/skills";
import Contactus from "./pages/contactus";

// Assets
import logo from "./Images/b1.png";
import clickSound from "./Images/click.mp3";
import bg from "./Images/bg.avif";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // click sound
  const clickAudio = useMemo(() => {
    const audio = new Audio(clickSound);
    audio.volume = 0; // increase if you want sound (ex: 0.3)
    return audio;
  }, []);

  const playClickSound = () => {
    try {
      clickAudio.currentTime = 0;
      clickAudio.play();
    } catch {}
  };

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = () => {
    closeMenu();
    playClickSound();
  };

  // active class helper (so active link highlights)
  const navClass = ({ isActive }) => `nav-item ${isActive ? "active" : ""}`;
  const navClassCTA = ({ isActive }) =>
    `nav-item nav-cta ${isActive ? "active" : ""}`;

  return (
    <div className="appBg" style={{ backgroundImage: `url(${bg})` }}>
      {/* GLOBAL BACKGROUND LAYERS */}
      <div className="bgOverlay" aria-hidden="true" />
      <div className="bgWaves" aria-hidden="true" />
      <div className="bgSparkles" aria-hidden="true" />

      {/* ===== NAVBAR ===== */}
      <header className="app-navbar">
        <div className="nav-inner">
          {/* BRAND */}
          <Link to="/" className="brand" onClick={handleNavClick}>
            <img src={logo} alt="Logo" className="brand-logo" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav-links nav-desktop">
            <NavLink to="/" onClick={playClickSound} className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={playClickSound} className={navClass}>
              About
            </NavLink>
            <NavLink
              to="/education"
              onClick={playClickSound}
              className={navClass}
            >
              Education
            </NavLink>
            <NavLink
              to="/experience"
              onClick={playClickSound}
              className={navClass}
            >
              Experience
            </NavLink>
            <NavLink to="/skills" onClick={playClickSound} className={navClass}>
              Skills
            </NavLink>
            <NavLink to="/contact" onClick={playClickSound} className={navClassCTA}>
              Contact
            </NavLink>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((v) => !v);
              playClickSound();
            }}
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"} />
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav className={`nav-mobile ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" onClick={handleNavClick} className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleNavClick} className={navClass}>
            About Me
          </NavLink>
          <NavLink to="/education" onClick={handleNavClick} className={navClass}>
            Education
          </NavLink>
          <NavLink to="/experience" onClick={handleNavClick} className={navClass}>
            Experience
          </NavLink>
          <NavLink to="/skills" onClick={handleNavClick} className={navClass}>
            Skills
          </NavLink>
          <NavLink to="/contact" onClick={handleNavClick} className={navClassCTA}>
            Contact Us
          </NavLink>
        </nav>
      </header>

      {/* ===== PAGE AREA ===== */}
      <main className="app-main" onClick={closeMenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="app-footer">
        <div className="footer-inner">
          <p className="footer-text">
            © {new Date().getFullYear()} Spoorthi Gopu. All Rights Reserved.
          </p>

          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" />
            </a>

            <a
              href="https://github.com/spoorthi967"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              aria-label="GitHub"
            >
              <i className="bi bi-github" />
            </a>

            <a
              href="mailto:spoorthi6918@gmail.com"
              onClick={playClickSound}
              aria-label="Email"
            >
              <i className="bi bi-envelope-at-fill" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
