import React from "react";
import "./Aboutme.css";

/* ✅ IMPORT IMAGE FROM SRC */
import aboutImg from "../Images/about.webp";

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
            I build scalable B2B marketing automation using{" "}
            <strong>Adobe Marketo Engage</strong>, improve lead quality through
            lifecycle strategy, and connect campaigns to revenue with reliable
            data and reporting.
          </p>
        </div>

        {/* MAIN CARD */}
        <section className="aboutCard aboutGrid">
          {/* IMAGE */}
          <div className="aboutImageWrap">
            <div className="aboutImageGlass">
              <img
                src={aboutImg}
                alt="Spoorthi Gopu - Marketing Automation Specialist"
                className="aboutImage"
                loading="lazy"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="aboutLeft">
            <h2 className="sectionTitle">
              <i className="bi bi-person-heart" /> My Story
            </h2>

            <div className="aboutText">
              <p>
                I am a <strong>Marketing Automation Specialist</strong> with over{" "}
                <strong>5 years of experience</strong> building and optimizing
                B2B marketing programs using{" "}
                <strong>Adobe Marketo Engage</strong>.
              </p>

              <p>
                My work focuses on scalable automation frameworks including smart
                campaigns, engagement programs, lead lifecycle management,
                scoring models, and segmentation strategies that improve lead
                quality and sales alignment.
              </p>

              <p>
                I have extensive experience integrating Marketo with{" "}
                <strong>Salesforce</strong> and{" "}
                <strong>Microsoft Dynamics 365</strong>, ensuring clean data
                flow, accurate field mapping, and reliable CRM synchronization.
              </p>

              <p>
                I collaborate closely with marketing, sales, and analytics teams
                using <strong>Power BI</strong> and{" "}
                <strong>Marketo Revenue Cycle Explorer (RCE)</strong> to translate
                campaign performance into pipeline impact.
              </p>

              <p>
                I also implement governance and compliance practices aligned
                with <strong>GDPR, CAN-SPAM, CASL, and CCPA</strong> to protect
                data integrity and brand trust.
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
                  <span>
                    End-to-end Marketo program builds using templates, tokens,
                    and scalable workflows
                  </span>
                </div>

                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>
                    Lead scoring and lifecycle strategy to improve MQL quality
                    and routing accuracy
                  </span>
                </div>

                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>
                    CRM sync troubleshooting, field mapping, and data QA across
                    Salesforce and Dynamics
                  </span>
                </div>

                <div className="hItem">
                  <i className="bi bi-check2-circle" />
                  <span>
                    Revenue-focused reporting using Power BI and Marketo RCE
                  </span>
                </div>
              </div>
            </div>

            {/* TOOLS */}
            <div className="toolRow">
              <span className="toolPill">
                <i className="bi bi-lightning-charge-fill" /> Marketo Engage
              </span>
              <span className="toolPill">
                <i className="bi bi-cloud-check" /> Salesforce
              </span>
              <span className="toolPill">
                <i className="bi bi-diagram-3-fill" /> Dynamics 365
              </span>
              <span className="toolPill">
                <i className="bi bi-bar-chart-fill" /> Power BI
              </span>
              <span className="toolPill">
                <i className="bi bi-shield-lock-fill" /> Compliance
              </span>
            </div>

            {/* ACTIONS */}
            <div className="aboutActions">
              <a className="aboutBtn primary" href="/resume.pdf" download>
                Download Resume <i className="bi bi-download" />
              </a>

              <a
                className="aboutBtn ghost"
                href="mailto:spoorthi6918@gmail.com"
              >
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
        </section>
      </div>
    </div>
  );
};

export default Aboutme;
