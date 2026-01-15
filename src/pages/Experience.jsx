import React, { useEffect, useMemo, useState } from "react";
import "./Experience.css";

const Experience = () => {
  const slides = useMemo(
    () => [
      {
        role: "Senior Marketo Specialist",
        company: "Critical River",
        location: "United States",
        story:
          "Owned end-to-end automation delivery — intake, build, QA, launch, and reporting — with a focus on scalable program design, data quality, and pipeline alignment.",
        description:
          "Built and optimized B2B automation in Adobe Marketo Engage, improved lead quality with scoring + segmentation, strengthened CRM sync reliability, and supported performance reporting via Power BI and Marketo RCE.",
        points: [
          "Built scalable Marketo programs: Smart Campaigns, Engagement Programs, templates, and reusable tokens",
          "Improved MQL quality using lifecycle routing + scoring models (behavioral + demographic)",
          "Designed segmentation frameworks (ICP/persona/region/product interest) for targeted journeys",
          "Managed email + nurture + event follow-ups (batch + trigger) with strong QA governance",
          "Supported Marketo ↔ CRM health (Salesforce/Dynamics): sync checks, mapping validation, error triage",
          "Enabled reporting with Power BI / Marketo RCE to connect campaigns to pipeline impact",
        ],
      },
      {
        role: "Marketing Automation Specialist",
        company: "Konnectsu Technologies",
        location: "India",
        story:
          "Built my campaign execution foundation — emails, landing pages, forms, and end-to-end event programs with automated follow-ups and clean tracking.",
        description:
          "Executed multi-channel campaigns across email and events, automated webinar workflows, improved CRM data quality, and supported performance tracking with consistent tagging and reporting.",
        points: [
          "Built email programs, landing pages, and forms using tokens/snippets for scalable production",
          "Created nurture and trigger-based journeys (welcome, reminders, re-engagement)",
          "Delivered webinar/event programs (ON24/Zoom) with attendance-based automated follow-ups",
          "Maintained segmentation rules and list hygiene (bounces, invalid emails, normalization)",
          "Applied consistent UTM/channel tagging to improve attribution and reporting accuracy",
          "Supported CRM sync validation and troubleshooting for reliable operations",
        ],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 5200);
    return () => clearInterval(interval);
  }, [slides.length]);

  const progress = ((index + 1) / slides.length) * 100;

  return (
    <div className="expShell">
      <div className="expContainer">
        {/* HEADER */}
        <div className="expTop">
          <div className="expKicker">
            <span className="kDot" />
            Experience • Marketing Automation • Marketo
          </div>

          <h1 className="expTitle">
            My <span>Experience</span>
          </h1>

          <p className="expSubtitle">
            Focused on clean, scalable marketing automation — improving lead quality,
            strengthening CRM reliability, and connecting campaigns to pipeline impact.
          </p>
        </div>

        {/* CARD */}
        <section className="expCard" aria-roledescription="carousel">
          {/* TOP BAR */}
          <div className="expCardTop">
            <div className="expBadge">
              <i className="bi bi-briefcase-fill" />
              <span>Work Highlights</span>
            </div>

            <div className="expControls">
              <button className="expIconBtn" onClick={prev} aria-label="Previous experience">
                <i className="bi bi-arrow-left" />
              </button>
              <button className="expIconBtn" onClick={next} aria-label="Next experience">
                <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="expProgress" aria-label="Slide progress">
            <span className="expProgressFill" style={{ width: `${progress}%` }} />
          </div>

          {/* SLIDER */}
          <div className="expSlider">
            <div className="expSlides" style={{ transform: `translateX(-${index * 100}%)` }}>
              {slides.map((item, i) => (
                <article className="expSlide" key={i} aria-hidden={i !== index}>
                  <div className="expSlideInner">
                    <div className="expIcon">
                      <i className="bi bi-briefcase-fill" />
                    </div>

                    <div className="expText">
                      <h3 className="expRole">{item.role}</h3>

                      <div className="expMeta">
                        <span>
                          <i className="bi bi-building" /> {item.company}
                        </span>
                        <span>
                          <i className="bi bi-geo-alt-fill" /> {item.location}
                        </span>
                      </div>

                      <p className="expStory">{item.story}</p>
                      <p className="expDesc">{item.description}</p>

                      <ul className="expPoints">
                        {item.points.map((p, idx) => (
                          <li key={idx}>
                            <i className="bi bi-check2-circle" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="expFootRow">
                    <div className="expCount">
                      <span className="expCountNum">{String(i + 1).padStart(2, "0")}</span>
                      <span className="expCountSep">/</span>
                      <span className="expCountTotal">{String(slides.length).padStart(2, "0")}</span>
                    </div>

                    <div className="expHint">
                      <i className="bi bi-mouse" /> Auto-slides • Use arrows or dots
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="expDots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
