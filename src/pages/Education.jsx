import React, { useEffect, useState } from "react";
import "./Education.css";

const Education = () => {
  const slides = [
    {
      degree: "Master of Science in Information Systems",
      institute: "Indiana Institute of Technology",
      location: "Fort Wayne, Indiana",
      description:
        "Focused on information systems, data analytics, business processes, and enterprise technologies. Strengthened skills in system design, data-driven decision making, and IT strategy.",
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institute: "Swami Vivekananda Institute of Technology",
      location: "India",
      description:
        "Built a strong foundation in engineering principles, logical thinking, problem solving, and technology fundamentals that support my work in marketing automation and integrations.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="eduShell">
      <div className="eduContainer">
        {/* HEADER */}
        <div className="eduTop">
          <div className="eduKicker">
            <span className="kDot" />
            Education • Academics • Foundation
          </div>

          <h1 className="eduTitle">
            My <span>Education</span>
          </h1>

          <p className="eduSubtitle">
            A strong academic foundation that supports my work in marketing automation,
            analytics, system design, and enterprise technology.
          </p>
        </div>

        {/* SLIDER CARD */}
        <section className="eduCard">
          <div className="eduSlider">
            <div
              className="eduSlides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((item, i) => (
                <div className="eduSlide" key={i}>
                  <div className="eduIcon">
                    <i className="bi bi-mortarboard-fill" />
                  </div>

                  <div className="eduText">
                    <h3 className="eduDegree">{item.degree}</h3>

                    <div className="eduMeta">
                      <span>
                        <i className="bi bi-building" /> {item.institute}
                      </span>
                      <span>
                        <i className="bi bi-geo-alt-fill" /> {item.location}
                      </span>
                    </div>

                    <p className="eduDesc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="eduDots">
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

        {/* FOOT NOTE */}
        
      </div>
    </div>
  );
};

export default Education;
