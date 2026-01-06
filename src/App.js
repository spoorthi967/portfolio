import React, { useMemo, useState } from "react";
import { HashRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

// Pages
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/skills"; // ⚠ your file is lowercase: skills.jsx
import Contactus from "./pages/contactus";

// Assets
import logo from "./Images/c.png";
import clickSound from "./Images/click.mp3";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickAudio = useMemo(() => {
    const audio = new Audio(clickSound);
    audio.volume = 0;
    return audio;
  }, []);

  const playClickSound = () => {
    try {
      clickAudio.currentTime = 0;
      clickAudio.play();
    } catch (e) {}
  };

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = () => {
    closeMenu();
    playClickSound();
  };

  return (
    <Router>
      {/* ===== NAVBAR ===== */}
      <header className="app-navbar">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={handleNavClick}>
            <img src={logo} alt="Logo" className="brand-logo" />
            
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => {
              setMenuOpen((v) => !v);
              playClickSound();
            }}
          >
            <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"} />
          </button>

          <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
            <NavLink to="/" onClick={handleNavClick} className="nav-item">
              Home
            </NavLink>
            <NavLink to="/about" onClick={handleNavClick} className="nav-item">
              About
            </NavLink>
            <NavLink to="/education" onClick={handleNavClick} className="nav-item">
              Education
            </NavLink>
            <NavLink to="/experience" onClick={handleNavClick} className="nav-item">
              Experience
            </NavLink>
            <NavLink to="/skills" onClick={handleNavClick} className="nav-item">
              Skills
            </NavLink>
            <NavLink to="/contact" onClick={handleNavClick} className="nav-item nav-cta">
              Contact
            </NavLink>
          </nav>
        </div>
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
    </Router>
  );
};

export default App;
