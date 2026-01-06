import React from "react";
import "./Aboutme.css";
import aboutImg from "../Images/about.webp";

const Aboutme = () => {
  return (
    <div className="aboutWrap">
      <div className="aboutCard aboutGrid">

        {/* LEFT: CONTENT */}
        <div className="aboutContentCol">
          <div className="aboutHeader">
            <h1 className="aboutTitle">
              About <span>Me</span>
            </h1>
            <p className="aboutSubtitle">
              Marketing Automation • Adobe Marketo • CRM Integrations
            </p>
          </div>

          <div className="aboutContent">
            <p>
              I am a <strong>Marketing Automation Specialist</strong> with over{" "}
              <strong>5 years of experience</strong> building and optimizing B2B
              marketing automation programs using{" "}
              <strong>Adobe Marketo Engage</strong>.
            </p>

            <p>
              My core strengths include{" "}
              <strong>lead lifecycle management</strong>, scoring models,
              segmentation, nurture programs, and dynamic content. I have
              extensive experience integrating Marketo with{" "}
              <strong>Salesforce</strong> and{" "}
              <strong>Microsoft Dynamics</strong> to ensure clean data flow and
              accurate attribution.
            </p>

            <p>
              I work closely with analytics and sales teams to deliver insights
              through <strong>Power BI</strong> and{" "}
              <strong>Marketo Revenue Cycle Explorer (RCE)</strong>, helping
              organizations understand campaign performance and revenue impact.
            </p>

            <p>
              I also ensure compliance with{" "}
              <strong>GDPR, CAN-SPAM, CASL, and CCPA</strong>, implementing consent
              workflows and preference management to protect user data and brand
              trust.
            </p>
          </div>

          
        </div>

        {/* RIGHT: IMAGE */}
        <div className="aboutImageCol">
          <img
            src={aboutImg}
            alt="About Spoorthi Gopu"
            className="aboutImage"
          />
        </div>

      </div>
    </div>
  );
};

export default Aboutme;
