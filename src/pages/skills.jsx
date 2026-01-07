import React, { useEffect, useState } from "react";
import "./skills.css";

const slides = [
  {
    title: "Marketing Automation",
    icon: "bi-gear-fill",
    items: [
      { icon: "bi-lightning-charge-fill", text: "Adobe Marketo / Marketo Engage" },
      { icon: "bi-diagram-3-fill", text: "Smart Campaigns & Smart Lists" },
      { icon: "bi-arrow-repeat", text: "Engagement Programs & Nurture Streams" },
      { icon: "bi-bullseye", text: "Lead Scoring & Lifecycle Management" },
      { icon: "bi-tags-fill", text: "Tokens, Snippets & Dynamic Content" },
      { icon: "bi-bezier2", text: "A/B & Multivariate Testing" },
    ],
  },
  {
    title: "CRM & Integrations",
    icon: "bi-link-45deg",
    items: [
      { icon: "bi-cloud-check-fill", text: "Salesforce CRM" },
      { icon: "bi-building", text: "Microsoft Dynamics 365" },
      { icon: "bi-boxes", text: "Zoho CRM" },
      { icon: "bi-braces", text: "REST & SOAP APIs" },
      { icon: "bi-plug-fill", text: "Webhooks & Custom API Connectors" },
      { icon: "bi-broadcast-pin", text: "ZoomInfo, LinkedIn Ads, ON24, Zoom" },
    ],
  },
  {
    title: "Email & Web Development",
    icon: "bi-envelope-paper-fill",
    items: [
      { icon: "bi-filetype-html", text: "HTML5, CSS3, JavaScript" },
      { icon: "bi-code-slash", text: "Velocity Script & AMPscript" },
      { icon: "bi-phone-fill", text: "Responsive Email Templates" },
      { icon: "bi-ui-checks-grid", text: "Landing Pages & Forms" },
      { icon: "bi-layers-fill", text: "Dynamic Content Blocks" },
      { icon: "bi-palette-fill", text: "Mobile-First UI/UX Design" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "bi-graph-up-arrow",
    items: [
      { icon: "bi-database-fill", text: "SQL & Advanced Excel" },
      { icon: "bi-funnel-fill", text: "Data Cleansing & Deduplication" },
      { icon: "bi-bar-chart-fill", text: "Power BI Dashboards" },
      { icon: "bi-currency-exchange", text: "Marketo Revenue Cycle Explorer (RCE)" },
      { icon: "bi-geo-alt-fill", text: "Google Analytics & UTM Tracking" },
      { icon: "bi-pie-chart-fill", text: "Campaign Attribution & ROI Analysis" },
    ],
  },
  {
    title: "Compliance & Governance",
    icon: "bi-shield-lock-fill",
    items: [
      { icon: "bi-shield-check", text: "GDPR, CAN-SPAM, CASL, CCPA" },
      { icon: "bi-person-check-fill", text: "Consent & Preference Management" },
      { icon: "bi-envelope-check-fill", text: "Double Opt-In Configuration" },
      { icon: "bi-grid-1x2-fill", text: "Workspace & Partition Setup" },
      { icon: "bi-diagram-2-fill", text: "User & Asset Governance" },
    ],
  },
  {
    title: "Collaboration & Tools",
    icon: "bi-people-fill",
    items: [
      { icon: "bi-kanban-fill", text: "Jira, Confluence, Asana, Trello" },
      { icon: "bi-chat-dots-fill", text: "Slack & Microsoft Teams" },
      { icon: "bi-git", text: "GitHub & Bitbucket" },
      { icon: "bi-arrow-left-right", text: "Agile Project Management" },
      { icon: "bi-diagram-3", text: "Cross-functional Collaboration" },
    ],
  },
];

const Skills = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  // Auto slide (pause on hover)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4200);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="skillsSlideWrap">
      {/* FLOATING ORBS LAYER (required for round circle floating effect) */}
      <div className="skillsFloatLayer">
        {/* Optional extra orbs (feel free to remove/adjust) */}
        <span
          className="orb"
          style={{
            width: 120,
            height: 120,
            top: "62%",
            left: "18%",
            background: "rgba(180,120,255,0.45)",
            animationDelay: "1.2s",
          }}
        />
        <span
          className="orb"
          style={{
            width: 90,
            height: 90,
            top: "34%",
            right: "22%",
            background: "rgba(0,255,200,0.45)",
            animationDelay: "2.1s",
          }}
        />
        <span
          className="orb"
          style={{
            width: 70,
            height: 70,
            bottom: "22%",
            left: "40%",
            background: "rgba(120,180,255,0.45)",
            animationDelay: "0.6s",
          }}
        />
      </div>

      <div className="skillsSliderCanvas">
        <h1 className="skillsSlideTitle">Skills</h1>

        <div
          className="skillsSlider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* ARROWS */}
          <button className="skillsNavBtn left" onClick={prev} aria-label="Previous">
            <i className="bi bi-chevron-left" />
          </button>
          <button className="skillsNavBtn right" onClick={next} aria-label="Next">
            <i className="bi bi-chevron-right" />
          </button>

          {/* TRACK */}
          <div
            className="skillsSlides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div className="skillsSlide" key={i}>
                <div className="skillsIcon">
                  <span className="skillsBigIcon" aria-hidden="true">
                    <i className={`bi ${slide.icon}`} />
                  </span>
                </div>

                <div className="skillsText">
                  <h3>{slide.title}</h3>

                  <div className="skillsPills">
                    {slide.items.map((it, idx) => (
                      <div className="skillPill" key={idx}>
                        <span className="pillIcon" aria-hidden="true">
                          <i className={`bi ${it.icon}`} />
                        </span>
                        <span className="pillText">{it.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="skillsCount">
                  {i + 1} / {slides.length}
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="skillsDots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="skillsHint">
            <i className="bi bi-sparkles" /> Use arrows or dots • Auto-slides • Hover to pause
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
