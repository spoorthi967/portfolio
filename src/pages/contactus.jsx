import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <section className="contactSlideWrap">
      {/* floating orbs like Skills/Home */}
      <div className="contactFloatLayer">
        <span
          className="orb"
          style={{
            width: 240,
            height: 240,
            top: "18%",
            left: "10%",
            background: "rgba(0,255,200,0.45)",
          }}
        />
        <span
          className="orb"
          style={{
            width: 200,
            height: 200,
            bottom: "14%",
            right: "12%",
            background: "rgba(120,180,255,0.45)",
          }}
        />
        <span
          className="orb"
          style={{
            width: 120,
            height: 120,
            top: "55%",
            left: "42%",
            background: "rgba(180,120,255,0.40)",
          }}
        />
      </div>

      <div className="contactCanvas">
        {/* Header same style as other pages */}
        <div className="contactTop">
          <div className="contactKicker">
            <span className="kDot" />
            Contact • Let’s Connect • Open to Roles
          </div>

          <h1 className="contactSlideTitle">
            Contact <span>Me</span>
          </h1>

          <p className="contactSubtitle">
            I’m open to <strong>Marketing Automation / Marketo</strong> opportunities and professional
            collaborations. Feel free to reach out — I reply fast.
          </p>
        </div>

        {/* Glass card like Education */}
        <div className="contactCard">
          {/* left icon bubble */}
          <div className="contactIcon">
            <i className="bi bi-chat-dots-fill" />
          </div>

          {/* content */}
          <div className="contactText">
            <h3>Let’s Connect</h3>

            <p>
              If you’re hiring for <strong>Marketing Automation, Marketo, or Marketing Ops</strong>,
              I’d love to connect. I can share portfolio work, case studies, and availability.
            </p>

            <div className="contactLinks">
              <a href="mailto:spoorthi6918@gmail.com" title="Email" aria-label="Email">
                <i className="bi bi-envelope-fill" />
              </a>

              <a
                href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>

              <a
                href="https://github.com/spoorthi967"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="bi bi-github" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                title="Resume"
                aria-label="Resume"
              >
                <i className="bi bi-file-earmark-arrow-down-fill" />
              </a>
            </div>

            <div className="contactMeta">
              <span>
                <i className="bi bi-geo-alt-fill" /> Fort Wayne, Indiana • United States
              </span>
              <span>
                <i className="bi bi-lightning-charge-fill" /> Open to: Remote • Hybrid • Onsite
              </span>
            </div>

            <div className="contactCTA">
              <a className="contactBtn primary" href="mailto:spoorthi6918@gmail.com">
                Email Me <i className="bi bi-arrow-right" />
              </a>

              <a
                className="contactBtn ghost"
                href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
                target="_blank"
                rel="noreferrer"
              >
                Message on LinkedIn <i className="bi bi-linkedin" />
              </a>
            </div>

            <div className="contactHint">
              <i className="bi bi-sparkles" /> Thanks for visiting my portfolio ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
