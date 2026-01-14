import React from "react";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutShell">
      <div className="aboutContainer">
        {/* TOP HEADER */}
        <div className="aboutTop">
          <div className="aboutKicker">
            <span className="kDot" />
            About Me • Marketing Automation • Marketo • CRM
          </div>

          <h1 className="aboutTitle">
            About <span>Me</span>
          </h1>

          <p className="aboutSubtitle">
            I build scalable B2B automation in <strong>Adobe Marketo Engage</strong>, strengthen lead
            quality through lifecycle + scoring, and connect campaigns to revenue using analytics and reporting.
          </p>
        </div>

        {/* MAIN CARD */}
        <section className="aboutCard aboutGrid aboutSingle">
          {/* CONTENT */}
          <div className="aboutLeft">
            <h2 className="sectionTitle">
              <i className="bi bi-person-heart" /> My Story
            </h2>

            <div className="aboutText">
              <p>
                I am a <strong>Marketing Automation Specialist</strong> with over{" "}
                <strong>5 years of experience</strong> building and optimizing B2B marketing automation programs using{" "}
                <strong>Adobe Marketo Engage</strong>.
              </p>

              <p>
                My core strengths include <strong>lead lifecycle management</strong>, scoring models, segmentation,
                nurture programs, and dynamic content. I have extensive experience integrating Marketo with{" "}
                <strong>Salesforce</strong> to ensure clean data flow and accurate attribution.
              </p>

              <p>
                I work closely with analytics and sales teams to deliver insights through <strong>Power BI</strong>{" "}
                and <strong>Marketo Revenue Cycle Explorer (RCE)</strong>, helping organizations understand campaign
                performance and revenue impact.
              </p>

              <p>
                I also ensure compliance with <strong>GDPR, CAN-SPAM, CASL, and CCPA</strong>, implementing consent
                workflows and preference management to protect user data and brand trust.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="highlights">
              <div className="hTitle">
                <i className="bi bi-stars" /> Highlights
              </div>

              <div className="hGrid">
                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>End-to-end Marketo program builds (templates, tokens, scalable workflows)</span>
                </div>
                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>Lead scoring + segmentation to improve MQL quality and routing accuracy</span>
                </div>
                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>CRM sync debugging + field mapping (SFDC / Dynamics) and data QA standards</span>
                </div>
                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>Reporting dashboards (Power BI / RCE) for pipeline impact and attribution</span>
                </div>
              </div>
            </div>

            {/* TOOLS */}
            <div className="toolRow">
              <span className="toolPill"><i className="bi bi-lightning-charge-fill" /> Marketo Engage</span>
              <span className="toolPill"><i className="bi bi-cloud-check" /> Salesforce</span>
              <span className="toolPill"><i className="bi bi-diagram-3-fill" /> Dynamics</span>
              <span className="toolPill"><i className="bi bi-bar-chart-fill" /> Power BI</span>
              <span className="toolPill"><i className="bi bi-shield-lock-fill" /> Compliance</span>
            </div>

            {/* ACTIONS */}
            <div className="aboutActions">
              <a className="aboutBtn primary" href="/resume.pdf" download>
                Download Resume <i className="bi bi-download" />
              </a>

              <a className="aboutBtn ghost" href="mailto:spoorthi6918@gmail.com">
                Email Me <i className="bi bi-envelope-fill" />
              </a>

              <a
                className="aboutBtn ghost"
                href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          {/* QUICK FACTS (RIGHT COLUMN CONTENT ONLY) */}
          <div className="aboutRight">
            <div className="factsCard">
              <div className="factsTitle">
                <i className="bi bi-lightbulb-fill" /> Quick Facts
              </div>

              <div className="factsList">
                <div className="fact">
                  <span className="factKey">Focus</span>
                  <span className="factVal">B2B Lifecycle + Governance</span>
                </div>
                <div className="fact">
                  <span className="factKey">Strength</span>
                  <span className="factVal">Clean data + reliable automation</span>
                </div>
                <div className="fact">
                  <span className="factKey">Collab</span>
                  <span className="factVal">Marketing • Sales • Analytics</span>
                </div>
                <div className="fact">
                  <span className="factKey">Goal</span>
                  <span className="factVal">Pipeline impact + measurable growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutme;
