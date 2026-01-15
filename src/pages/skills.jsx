import React, { useEffect, useState } from "react";
import "./skills.css";

const slides = [
  {
    title: "Marketing Automation",
    icon: "bi-gear-fill",
    items: [
      { icon: "bi-lightning-charge-fill", text: "Adobe Marketo Engage" },
      { icon: "bi-diagram-3-fill", text: "Smart Campaigns & Smart Lists" },
      { icon: "bi-arrow-repeat", text: "Engagement Programs" },
      { icon: "bi-bullseye", text: "Lead Scoring & Lifecycle" },
      { icon: "bi-tags-fill", text: "Tokens & Snippets" },
      { icon: "bi-bezier2", text: "A/B Testing" },
    ],
  },
  {
    title: "CRM & Integrations",
    icon: "bi-link-45deg",
    items: [
      { icon: "bi-cloud-check-fill", text: "Salesforce CRM" },
      { icon: "bi-building", text: "Dynamics 365" },
      { icon: "bi-boxes", text: "Zoho CRM" },
      { icon: "bi-braces", text: "REST & SOAP APIs" },
      { icon: "bi-plug-fill", text: "Webhooks" },
      { icon: "bi-broadcast-pin", text: "ON24 / Zoom / LinkedIn Ads" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "bi-graph-up-arrow",
    items: [
      { icon: "bi-database-fill", text: "SQL & Advanced Excel" },
      { icon: "bi-funnel-fill", text: "Data Cleansing" },
      { icon: "bi-bar-chart-fill", text: "Power BI Dashboards" },
      { icon: "bi-currency-exchange", text: "Marketo RCE" },
      { icon: "bi-geo-alt-fill", text: "GA & UTM Tracking" },
      { icon: "bi-pie-chart-fill", text: "Attribution & ROI" },
    ],
  },
];

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const progress = ((index + 1) / slides.length) * 100;

  return (
    <section className="skillsShell">
      <div className="skillsContainer">
        {/* HEADER */}
        <div className="skillsTop">
          <div className="skillsKicker">
            <span className="kDot" /> Skills • Core Competencies
          </div>

          <h1 className="skillsTitle">
            My <span>Skills</span>
          </h1>

          <p className="skillsSubtitle">
            A focused skill set built around scalable marketing automation,
            integrations, analytics, and governance.
          </p>
        </div>

        {/* CARD */}
        <section
          className="skillsCard"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* TOP BAR */}
          <div className="skillsCardTop">
            <div className="skillsBadge">
              <i className="bi bi-stars" />
              Core Competencies
            </div>

            <div className="skillsControls">
              <button className="skillsIconBtn" onClick={prev}>
                <i className="bi bi-arrow-left" />
              </button>
              <button className="skillsIconBtn" onClick={next}>
                <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="skillsProgress">
            <span
              className="skillsProgressFill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* SLIDER */}
          <div className="skillsSlider">
            <div
              className="skillsSlides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div className="skillsSlide" key={i}>
                  <div className="skillsSlideInner">
                    <div className="skillsIconBox">
                      <i className={`bi ${slide.icon}`} />
                    </div>

                    <div className="skillsText">
                      <h3>{slide.title}</h3>

                      <div className="skillsPills">
                        {slide.items.map((it, idx) => (
                          <div className="skillPill" key={idx}>
                            <span className="pillIcon">
                              <i className={`bi ${it.icon}`} />
                            </span>
                            <span className="pillText">{it.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="skillsFoot">
                    {i + 1} / {slides.length}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="skillsDots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
