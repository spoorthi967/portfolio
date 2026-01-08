import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import profilePic from "../Images/pi.jpeg";
import bg from "../Images/bg.avif";

export default function Home() {
  const cards = useMemo(
    () => [
      { title: "About Me", to: "/about", icon: "bi-person-circle", desc: "Learn more about my journey." },
      { title: "Experience", to: "/experience", icon: "bi-briefcase-fill", desc: "My work history & achievements." },
      { title: "Education", to: "/education", icon: "bi-mortarboard-fill", desc: "My academic background." },
      { title: "Skills", to: "/skills", icon: "bi-gear-fill", desc: "Tools & technologies I excel in." },
      { title: "Contact", to: "/contact", icon: "bi-envelope-fill", desc: "Let’s connect and talk." },
    ],
    []
  );

  // ✅ responsive perPage (4 desktop, 2 tablet, 1 mobile)
  const [perPage, setPerPage] = useState(4);

  useEffect(() => {
    const set = () => {
      const w = window.innerWidth;
      if (w <= 520) setPerPage(1);
      else if (w <= 980) setPerPage(2);
      else setPerPage(4);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const pages = Math.ceil(cards.length / perPage);
  const [page, setPage] = useState(0);

  // keep page valid when perPage changes
  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, pages - 1)));
  }, [pages]);

  const canSlide = pages > 1;

  const next = () => setPage((p) => (p + 1) % pages);
  const prev = () => setPage((p) => (p - 1 + pages) % pages);

  // ✅ auto slide ONLY when slider exists
  useEffect(() => {
    if (!canSlide) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canSlide, pages]);

  return (
    <div className="homeWrap" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bgOverlay" aria-hidden="true" />
      <div className="bgWaves" aria-hidden="true" />
      <div className="bgSparkles" aria-hidden="true" />

      <div className="homeContainer">
        <section className="heroGrid">
          {/* LEFT */}
          <div className="heroLeft">
            <h1 className="heroTitle">Hi, I’m Spoorthi.</h1>

            <div className="heroBullets">
              <div className="heroBullet">
                <i className="bi bi-caret-right-fill" />
                Marketing Automation Specialist.
              </div>

              <div className="heroBullet">
                <i className="bi bi-caret-right-fill" />
                Marketo | Salesforce Expert.
              </div>
            </div>

            <div className="heroActions">
              <Link className="ctaBtn" to="/projects">
                View Projects <i className="bi bi-arrow-right" />
              </Link>

              <a className="miniIconBtn" href="mailto:spoorthi6918@gmail.com" title="Email">
                <i className="bi bi-envelope-fill" />
              </a>

              <a
                className="miniIconBtn"
                href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>

            {/* ✅ WIDGETS DIRECTLY UNDER VIEW PROJECTS */}
            <section className="widgetsWrap widgetsUnderHero">
              {canSlide && (
                <>
                  <button className="navArrow left" onClick={prev} aria-label="Previous">
                    <i className="bi bi-chevron-left" />
                  </button>
                  <button className="navArrow right" onClick={next} aria-label="Next">
                    <i className="bi bi-chevron-right" />
                  </button>
                </>
              )}

              <div className="widgetsFrame">
                <div className="widgetsTrack" style={{ transform: `translateX(-${page * 100}%)` }}>
                  {Array.from({ length: pages }).map((_, pageIndex) => {
                    const start = pageIndex * perPage;
                    const chunk = cards.slice(start, start + perPage);

                    // pad for alignment so grid stays stable
                    const padded = [...chunk];
                    while (padded.length < perPage) padded.push(null);

                    return (
                      <div className={`widgetsPage widgetsCols-${perPage}`} key={pageIndex}>
                        {padded.map((card, i) =>
                          card ? (
                            <GlassCard key={`${pageIndex}-${i}`} {...card} />
                          ) : (
                            <div className="widgetGhost" key={`${pageIndex}-ghost-${i}`} />
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {canSlide && (
                <div className="dots">
                  {Array.from({ length: pages }).map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === page ? "active" : ""}`}
                      onClick={() => setPage(i)}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* RIGHT */}
          <div className="heroRight">
            <div className="photoGlass">
              <div className="photoInner">
                <img className="heroPhoto" src={profilePic} alt="Spoorthi" />
              </div>

              
 


              <span className="bubble bGit" title="GitHub">
                <i className="bi bi-github" />
              </span>

             

              <span className="bubble bMail" title="Email">
                <i className="bi bi-envelope-fill" />
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function GlassCard({ title, desc, to, icon }) {
  return (
    <div className="glassCard widgetCard">
      <div className="cardIcon">
        <i className={`bi ${icon}`} />
      </div>

      <h3 className="cardTitle">{title}</h3>
      <p className="cardDesc">{desc}</p>

      <Link to={to} className="cardBtn">
        View more <i className="bi bi-arrow-right" />
      </Link>
    </div>
  );
}
