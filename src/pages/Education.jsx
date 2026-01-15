import React, { useEffect, useMemo, useState } from "react";
import "./Education.css";

const Education = () => {
  const slides = useMemo(
    () => [
      {
        degree: "Master of Science in Information Systems",
        institute: "Indiana Institute of Technology",
        location: "Fort Wayne, Indiana",
        description:
          "Focused on information systems, data analytics, business processes, and enterprise technologies. Strengthened skills in system design, data-driven decision making, and IT strategy.",
        chips: ["Information Systems", "Analytics", "IT Strategy", "System Design"],
      },
      {
        degree: "Bachelor of Technology in Electronics & Communication Engineering",
        institute: "Swami Vivekananda Institute of Technology",
        location: "India",
        description:
          "Built a strong foundation in engineering principles, logical thinking, problem solving, and technology fundamentals that support my work in marketing automation and integrations.",
        chips: ["Problem Solving", "Engineering Core", "Logical Thinking", "Tech Fundamentals"],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const progress = ((index + 1) / slides.length) * 100;

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

        {/* CARD */}
        <section className="eduCard" aria-roledescription="carousel">
          {/* TOP BAR */}
          <div className="eduCardTop">
            <div className="eduBadge">
              <i className="bi bi-mortarboard-fill" />
              <span>Academic Timeline</span>
            </div>

            <div className="eduControls">
              <button className="eduIconBtn" onClick={prev} aria-label="Previous education">
                <i className="bi bi-arrow-left" />
              </button>
              <button className="eduIconBtn" onClick={next} aria-label="Next education">
                <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="eduProgress" aria-label="Slide progress">
            <span className="eduProgressFill" style={{ width: `${progress}%` }} />
          </div>

          {/* SLIDER */}
          <div className="eduSlider">
            <div
              className="eduSlides"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((item, i) => (
                <article className="eduSlide" key={i} aria-hidden={i !== index}>
                  <div className="eduSlideInner">
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

                      {/* CHIPS */}
                      <div className="eduChips">
                        {item.chips.map((c) => (
                          <span className="eduChip" key={c}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FOOT ROW */}
                  <div className="eduFootRow">
                    <div className="eduCount">
                      <span className="eduCountNum">{String(i + 1).padStart(2, "0")}</span>
                      <span className="eduCountSep">/</span>
                      <span className="eduCountTotal">{String(slides.length).padStart(2, "0")}</span>
                    </div>

                    <div className="eduHint">
                      <i className="bi bi-mouse" /> Auto-slides • Use arrows or dots
                    </div>
                  </div>
                </article>
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
      </div>
    </div>
  );
};

export default Education;
