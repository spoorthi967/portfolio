import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import profilePic from "../Images/pic.jpg";

export default function Home() {
  return (
    <section className="heroGrid">
      {/* ================= LEFT ================= */}
      <div className="heroLeft">
        <h1 className="heroTitle">Spoorthi Gopu</h1>
        <p className="heroSub">
          Senior Marketo Specialist · Marketing Automation · Salesforce CRM
        </p>

        <div className="heroBullets">
          <div className="heroBullet">
            <i className="bi bi-caret-right-fill" />
            Adobe Marketo Professional Certified
          </div>
          <div className="heroBullet">
            <i className="bi bi-caret-right-fill" />
            B2B Automation · Lead Lifecycle · CRM Integrations
          </div>
        </div>

        {/* ACTIONS */}
        <div className="heroActions">
          <Link className="ctaBtn" to="/experience">
            View Experience <i className="bi bi-arrow-right" />
          </Link>

          <a
            className="miniIconBtn"
            href="mailto:spoorthi6918@gmail.com"
            title="Email"
          >
            <i className="bi bi-envelope-fill" />
          </a>

          <a
            className="miniIconBtn"
            href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>

        {/* ================= WIDGET CHIPS ================= */}
        <div className="widgetsWrap">
          <Chip icon="bi-person-circle" label="About Me" to="/about" />
          <Chip icon="bi-briefcase-fill" label="Experience" to="/experience" />
          <Chip icon="bi-mortarboard-fill" label="Education" to="/education" />
          <Chip icon="bi-gear-fill" label="Skills" to="/skills" />
          <Chip icon="bi-envelope-fill" label="Contact" to="/contact" />
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="heroRight">
        <div className="photoGlass">
          <img className="heroPhoto" src={profilePic} alt="Spoorthi Gopu" />

          <span className="bubble bGit" title="GitHub">
            <i className="bi bi-github" />
          </span>

          <span className="bubble bMail" title="Email">
            <i className="bi bi-envelope-fill" />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ================= CHIP COMPONENT ================= */

function Chip({ icon, label, to }) {
  return (
    <Link to={to} className="chip">
      <span className="chipIcon">
        <i className={`bi ${icon}`} />
      </span>
      <span className="chipText">{label}</span>
      <i className="bi bi-arrow-right-short chipArrow" />
    </Link>
  );
}
