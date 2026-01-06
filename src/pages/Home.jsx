
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import profilePic from "../Images/pi.jpeg"; // change if your image name differs

const Home = () => {
  return (
    <div className="homeWrap">
      <div className="homeGrid">
        {/* LEFT: Cover Mockup */}
        <div className="coverCol">
          <div className="coverMock">
            <div className="coverTop">

              <div className="coverLine" />
            </div>

            <div className="coverPhotoFrame">
              <img className="coverPhoto" src={profilePic} alt="Spoorthi Gopu" />
            </div>

<hr/>

            <div className="coverNameBar">
              <div className="coverName">SPOORTHI GOPU</div>
        
            </div>

           
          </div>

          <div className="coverShadow" />
        </div>


        {/* RIGHT: Template Text */}
        <div className="contentCol">
          <h1 className="heroHeading">
            Gopu  <span>spoorthi</span>
          </h1>
<br/>
          <h3>Senior marketo specialist</h3>
<br/>
          <p className="heroSub">
            Expertly designed to showcase your skills and achievements. I build scalable B2B marketing
            automation in <strong>Adobe Marketo Engage</strong>, improve lead quality with scoring and
            segmentation, and connect campaigns to revenue with reporting (Power BI / RCE).
          </p>

         


<div className="actionIcons">
  {/* Resume Download */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="actionIcon"
    title="Download Resume"
  >
    <i className="bi bi-file-earmark-arrow-down-fill"></i>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/gopu-spoorthi-79185a200/"
    target="_blank"
    rel="noopener noreferrer"
    className="actionIcon"
    title="LinkedIn"
  >
    <i className="bi bi-linkedin"></i>
  </a>

  {/* Gmail */}
  <a
    href="mailto:spoorthi6918@gmail.com"
    className="actionIcon"
    title="Email Me"
  >
    <i className="bi bi-envelope-fill"></i>
  </a>
</div>



          
        </div>
      </div>
    </div>
  );
};

export default Home;
