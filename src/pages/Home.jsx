import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import profilePic from "../Images/pi.jpeg";

const previews = [
  {
    title: "About Me",
    to: "/about",
    icon: "bi-person-heart",
    mini: ["B2B Marketing Ops", "Automation + Data", "Pipeline mindset"],
    desc: "I build clean, scalable automation that improves lead quality and reporting.",
  },
  {
    title: "Skills",
    to: "/skills",
    icon: "bi-stars",
    mini: ["Marketo Engage", "SFDC / Dynamics", "Email + Power BI"],
    desc: "Smart campaigns, nurture streams, scoring, tokens, integrations, analytics — end to end.",
  },
  {
    title: "Education",
    to: "/education",
    icon: "bi-mortarboard",
    mini: ["Systems + Analytics", "Business strategy", "Hands-on projects"],
    desc: "Strong foundation in technology + data + strategy to support marketing operations.",
  },
  {
    title: "Experience",
    to: "/experience",
    icon: "bi-briefcase",
    mini: ["QA + Governance", "CRM Sync fixes", "Template systems"],
    desc: "Standardized QA, improved data quality, fixed sync issues, boosted campaign accuracy.",
  },
  {
    title: "Contact",
    to: "/contact",
    icon: "bi-chat-dots",
    mini: ["Email fast reply", "LinkedIn connect", "Open to roles"],
    desc: "Let’s connect — happy to share portfolio, case studies, and availability.",
  },
];

const Home = () => {
  const [idx, setIdx] = useState(0);

  const next = () => setIdx((p) => (p + 1) % previews.length);
  const prev = () => setIdx((p) => (p - 1 + previews.length) % previews.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homeWrap proBG">
      <div className="homeGrid proContainer">
        {/* LEFT */}
        <aside className="leftCard proCard">
          <div className="leftTop">
            <div className="leftLine" />
          </div>

          <div className="photoFrame">
            <img className="photo" src={profilePic} alt="Spoorthi Gopu" />
          </div>

          <div className="chipsRow">
            <span className="chip"><i className="bi bi-graph-up-arrow"></i> Marketing Ops</span>
            <span className="chip"><i className="bi bi-diagram-3"></i> CRM + Integrations</span>
            <span className="chip"><i className="bi bi-envelope-paper"></i> Email + Lifecycle</span>
          </div>

          <div className="leftName">
            <div className="name">SPOORTHI GOPU</div>
            <div className="role">Senior Marketo Specialist</div>
          </div>
        </aside>

        {/* RIGHT */}
        <main className="rightCol">
          <section className="heroCard proCard">
            <div className="badge">
              <span className="dot" />
              Open to Roles • Marketing Automation / Marketo
            </div>

            <h1 className="h1">
              Gopu <span>Spoorthi</span>
            </h1>

            <p className="sub">
              I build scalable B2B automation in <strong>Adobe Marketo Engage</strong>, improve lead
              quality with scoring + segmentation, and connect campaigns to revenue with reporting
              (Power BI / RCE).
            </p>

            <div className="heroActions">
              <a className="iconBtn" href="/resume.pdf" download="Spoorthi_Gopu_Resume.pdf" title="Download Resume">
                <i className="bi bi-download"></i>
              </a>

              <a
                className="iconBtn"
                href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a className="iconBtn" href="mailto:spoorthi6918@gmail.com" title="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>

              <Link to="/projects" className="primaryBtn">
                View Projects <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </section>

          <section className="previewCard proCard">
            <div className="pvTop">
              <h3 className="pvTitle">Quick Preview</h3>
              <div className="pvNav">
                <button className="pvBtn" onClick={prev} aria-label="Previous">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button className="pvBtn" onClick={next} aria-label="Next">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="pvSlider">
              <div className="pvTrack" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {previews.map((p, i) => (
                  <div className="pvSlide" key={i}>
                    <div className="pvIcon">
                      <i className={`bi ${p.icon}`}></i>
                    </div>

                    <div className="pvContent">
                      <div className="pvHead">
                        <h4 className="pvH4">{p.title}</h4>
                        <span className="pvCount">{i + 1}/{previews.length}</span>
                      </div>

                      <p className="pvDesc">{p.desc}</p>

                      <div className="pvMini">
                        {p.mini.map((m, k) => (
                          <span className="pvPill" key={k}>
                            <i className="bi bi-check2"></i> {m}
                          </span>
                        ))}
                      </div>

                      <Link to={p.to} className="pvLink">
                        More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pvHint">Use arrows or wait — auto slides ✨</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
