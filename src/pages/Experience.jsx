import React, { useEffect, useState } from "react";
import "./Experience.css";

const Experience = () => {
  const slides = [
    {
      role: "Senior Marketo Specialist",
      company: "Critical River",
      location: "United States",
      description:
        "Built end-to-end automation workflows in Adobe Marketo Engage, improved lead quality through scoring and segmentation, and supported reporting using Power BI / Marketo RCE.",
      points: [
        "Smart Campaigns, Smart Lists, Engagement Programs",
        "Lead scoring, segmentation, lifecycle optimization",
        "CRM sync checks + QA for clean data flow",
      ],
    },
    {
      role: "Marketing Automation Specialist",
      company: "Konnectsu Technologies",
      location: "India",
      description:
        "Executed multi-channel campaigns across email, landing pages, and webinars, automated event follow-ups, and improved reporting accuracy and CRM sync quality.",
      points: [
        "Email programs, landing pages, forms, tokens",
        "ON24 / Zoom programs + automated follow-ups",
        "Data hygiene + performance tracking",
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

