import React, { useEffect, useState } from "react";
import "./Experience.css";

const Experience = () => {
  const slides = [
    {
      role: "Senior Marketo Specialist",
      company: "Critical River",
      location: "United States",
      story:
        "In this role, I owned end-to-end automation delivery — from intake and build to QA, launch, and reporting. I focused on scalable program design, data quality, and aligning marketing activity to pipeline outcomes.",
      description:
        "Built and optimized B2B marketing automation programs in Adobe Marketo Engage, improved lead quality with scoring + segmentation, strengthened CRM sync reliability, and supported performance reporting via Power BI and Marketo RCE.",
      points: [
        "Designed and maintained Smart Campaigns, Smart Lists, Engagement Programs, and program templates for scalable execution",
        "Built lead scoring models (behavioral + demographic) and lifecycle routing to improve MQL quality and reduce noise for sales",
        "Created segmentation frameworks (ICP, persona, region, product interest) using reusable smart lists, filters, and tokens",
        "Managed email programs: operational emails, nurture streams, event follow-ups, and triggered journeys (batch + trigger)",
        "Implemented QA & governance: naming conventions, approval checklists, UTM standards, and pre/post-launch validation",
        "Supported Marketo ↔ CRM integration health (Salesforce / Dynamics): field sync checks, mapping validation, sync error triage",
        "Improved data hygiene: de-duplication logic, normalization rules, and CRM sync monitoring for cleaner attribution",
        "Enabled reporting & insights using Power BI and Marketo Revenue Cycle Explorer (RCE): funnel visibility, source performance, program ROI",
        "Partnered cross-functionally with demand gen, sales ops, and analytics teams to align campaign execution with pipeline goals",
        "Ensured compliance best practices (GDPR, CAN-SPAM, CASL/CCPA workflows): consent flags, preference management, suppression logic",
      ],
    },
    {
      role: "Marketing Automation Specialist",
      company: "Konnectsu Technologies",
      location: "India",
      story:
        "This was my hands-on campaign execution foundation — I built emails, landing pages, forms, and full event programs, then automated follow-ups and measurement. I learned fast QA, clean data practices, and reliable operations.",
      description:
        "Executed multi-channel campaigns across email and events, automated webinar and follow-up workflows, improved CRM data quality, and supported performance tracking with consistent tagging and reporting.",
      points: [
        "Built email programs, landing pages, and forms with reusable tokens/snippets to scale campaign creation",
        "Developed nurture flows and operational triggers (welcome series, reminders, follow-ups, re-engagement) using Smart Campaigns",
        "Delivered webinar/event programs using ON24 / Zoom with automated confirmations, reminders, attendance-based follow-ups",
        "Maintained segmentation lists and audience rules to support targeted messaging and improved engagement",
        "Applied consistent UTM strategy and channel tagging to improve attribution and reporting accuracy",
        "Performed list hygiene: bounce management, invalid email filtering, normalization, and basic de-duplication workflows",
        "Supported CRM sync validation and troubleshooting (field updates, sync delays, lead/contact alignment)",
        "Tracked campaign performance and shared insights with stakeholders for continuous optimization",
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="expSlideWrap">
      <div className="expSliderCanvas">
        <h1 className="expSlideTitle">Experience</h1>

        {/* My Story / My Experience (2–3 lines) */}
        <p className="expIntro">
          My experience is built around one goal: <strong>clean, scalable marketing automation</strong>{" "}
          that improves lead quality and shows measurable impact. I focus on{" "}
          <strong>Marketo execution</strong>, <strong>CRM integration reliability</strong>, and{" "}
          <strong>reporting that connects activity to pipeline</strong>.
        </p>

        <div className="expSlider">
          <div
            className="expSlides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item, i) => (
              <div className="expSlide" key={i}>
                <div className="expIcon">
                  <i className="bi bi-briefcase-fill"></i>
                </div>

                <div className="expText">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                  <small>{item.location}</small>

                  {/* Story mini paragraph */}
                  <p className="expStory">{item.story}</p>

                  <p className="expDesc">{item.description}</p>

                  <ul className="expPoints">
                    {item.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="expDots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
