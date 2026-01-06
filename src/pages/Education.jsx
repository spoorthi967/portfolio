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

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="eduSlideWrap">
      <div className="eduSliderCanvas">
        <h1 className="eduSlideTitle">Education</h1>

        <div className="eduSlider">
          <div
            className="eduSlides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item, i) => (
              <div className="eduSlide" key={i}>
                <div className="eduIcon">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>

                <div className="eduText">
                  <h3>{item.degree}</h3>
                  <span>{item.institute}</span>
                  <small>{item.location}</small>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="eduDots">
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

export default Education;

