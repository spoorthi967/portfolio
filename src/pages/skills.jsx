import React, { useEffect, useState } from "react";
import "./skills.css";

const slides = [
  {
    title: "Marketing Automation",
   
    items: [
      "Adobe Marketo / Marketo Engage",
      "Smart Campaigns & Smart Lists",
      "Engagement Programs & Nurture Streams",
      "Lead Scoring & Lifecycle Management",
      "Tokens, Snippets & Dynamic Content",
      "A/B & Multivariate Testing",
    ],
  },
  {
    title: "CRM & Integrations",
    
    items: [
      "Salesforce CRM",
      "Microsoft Dynamics 365",
      "Zoho CRM",
      "REST & SOAP APIs",
      "Webhooks & Custom API Connectors",
      "ZoomInfo, LinkedIn Ads, ON24, Zoom",
    ],
  },
  {
    title: "Email & Web Development",
    
    items: [
      "HTML5, CSS3, JavaScript",
      "Velocity Script & AMPscript",
      "Responsive Email Templates",
      "Landing Pages & Forms",
      "Dynamic Content Blocks",
      "Mobile-First UI/UX Design",
    ],
  },
  {
    title: "Data & Analytics",
 
    items: [
      "SQL & Advanced Excel",
      "Data Cleansing & Deduplication",
      "Power BI Dashboards",
      "Marketo Revenue Cycle Explorer (RCE)",
      "Google Analytics & UTM Tracking",
      "Campaign Attribution & ROI Analysis",
    ],
  },
  {
    title: "Compliance & Governance",
   
    items: [
      "GDPR, CAN-SPAM, CASL, CCPA",
      "Consent & Preference Management",
      "Double Opt-In Configuration",
      "Workspace & Partition Setup",
      "User & Asset Governance",
    ],
  },
  {
    title: "Collaboration & Tools",
   
    items: [
      "Jira, Confluence, Asana, Trello",
      "Slack & Microsoft Teams",
      "GitHub & Bitbucket",
      "Agile Project Management",
      "Cross-functional Collaboration",
    ],
  },
];

const Skills = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="skillsSlideWrap">
      <h1 className="skillsSlideTitle">Skills</h1>

      <div className="skillsSlider">
        <div
          className="skillsSlides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="skillsSlide" key={i}>
              <div className="skillsIcon">{slide.icon}</div>

              <div className="skillsText">
                <h3>{slide.title}</h3>

                <ul className="skillsList">
                  {slide.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="skillsDots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
