import React, { useEffect, useState } from "react";
import "./skills.css";

const slides = [
  {
    title: "Marketing Automation",
    icon: "⚙",
    items: [
      { icon: "▣", text: "Adobe Marketo / Marketo Engage" },
      { icon: "⧉", text: "Smart Campaigns & Smart Lists" },
      { icon: "⇄", text: "Engagement Programs & Nurture Streams" },
      { icon: "◎", text: "Lead Scoring & Lifecycle Management" },
      { icon: "≡", text: "Tokens, Snippets & Dynamic Content" },
      { icon: "Δ", text: "A/B & Multivariate Testing" },
    ],
  },
  {
    title: "CRM & Integrations", 
    icon: "🔗",
    
    items: [
      { icon: "⎈", text: "Salesforce CRM" },
      { icon: "▦", text: "Microsoft Dynamics 365" },
      { icon: "⌁", text: "Zoho CRM" },
      { icon: "⌂", text: "REST & SOAP APIs" },
      { icon: "⇢", text: "Webhooks & Custom API Connectors" },
      { icon: "⟲", text: "ZoomInfo, LinkedIn Ads, ON24, Zoom" },
    ],
  },
  {
    title: "Email & Web Development",
    icon: "✉",
    items: [
      { icon: "⌘", text: "HTML5, CSS3, JavaScript" },
      { icon: "≋", text: "Velocity Script & AMPscript" },
      { icon: "▭", text: "Responsive Email Templates" },
      { icon: "▢", text: "Landing Pages & Forms" },
      { icon: "≡", text: "Dynamic Content Blocks" },
      { icon: "◻", text: "Mobile-First UI/UX Design" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "📈",
    items: [
      { icon: "∑", text: "SQL & Advanced Excel" },
      { icon: "⟐", text: "Data Cleansing & Deduplication" },
      { icon: "▤", text: "Power BI Dashboards" },
      { icon: "◎", text: "Marketo Revenue Cycle Explorer (RCE)" },
      { icon: "⟲", text: "Google Analytics & UTM Tracking" },
      { icon: "⇶", text: "Campaign Attribution & ROI Analysis" },
    ],
  },
  {
    title: "Compliance & Governance",
    icon: "🛡",
    items: [
      { icon: "⚑", text: "GDPR, CAN-SPAM, CASL, CCPA" },
      { icon: "✓", text: "Consent & Preference Management" },
      { icon: "⧗", text: "Double Opt-In Configuration" },
      { icon: "▣", text: "Workspace & Partition Setup" },
      { icon: "⌁", text: "User & Asset Governance" },
    ],
  },
  {
    title: "Collaboration & Tools",
    icon: "🤝",
    items: [
      { icon: "☰", text: "Jira, Confluence, Asana, Trello" },
      { icon: "◉", text: "Slack & Microsoft Teams" },
      { icon: "⎇", text: "GitHub & Bitbucket" },
      { icon: "⇄", text: "Agile Project Management" },
      { icon: "⇵", text: "Cross-functional Collaboration" },
    ],
  },
];

const Skills = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  // Auto slide (no dots needed)
  useEffect(() => {
    const timer = setInterval(next, 3800);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="skillsSlideWrap">
      <div className="skillsSliderCanvas">
        <h2 className="skillsSlideTitle">Skills</h2>

        <div className="skillsSlider">
          {/* ARROWS */}
          <button className="skillsNavBtn left" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="skillsNavBtn right" onClick={next} aria-label="Next">
            ›
          </button>

          <div
            className="skillsSlides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div className="skillsSlide" key={i}>
                <div className="skillsIcon">
                  <span className="skillsBigIcon">{slide.icon}</span>
                </div>

                <div className="skillsText">
                  <h3>{slide.title}</h3>

                  <div className="skillsPills">
                    {slide.items.map((it, idx) => (
                      <div className="skillPill" key={idx}>
                        <span className="pillIcon">{it.icon}</span>
                        <span className="pillText">{it.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional: small slide count (looks clean) */}
                <div className="skillsCount">
                  {i + 1} / {slides.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
