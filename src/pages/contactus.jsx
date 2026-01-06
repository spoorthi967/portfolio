import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <div className="contactSlideWrap">
      <h1 className="contactSlideTitle">Contact Me</h1>

      <div className="contactSlider">
        <div className="contactSlide">

          <div className="contactIcon">📩</div>

          <div className="contactText">
            <h3>Let’s Connect</h3>
            <p>
              I’m open to Marketing Automation / Marketo opportunities and
              professional collaborations.
            </p>

            <div className="contactLinks">
              <a
                href="mailto:spoorthi6918@gmail.com"
                title="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://github.com/spoorthi967"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                title="Download Resume"
              >
                <i className="bi bi-file-earmark-arrow-down-fill"></i>
              </a>
            </div>

            <small>Fort Wayne, Indiana • United States</small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;
