import React, { useState, useEffect } from "react";
import "./slider.css";
import bg1 from "../../images/bg1.png";
import bg2 from "../../images/bg2.png";
function Slider() {
  const [activeImage, setActiveImage] = useState(1);
  useEffect(() => {
    const options = {
      root: document.querySelector(".main-container"),
      threshold: 0.5, // 50% visibility threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageNumber = Number(entry.target.dataset.imageNumber);
          setActiveImage(imageNumber);
        }
      });
    }, options);

    // Attach the observer to your images
    const imageElements = document.querySelectorAll(".image-container");
    imageElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="rectangle-slider">
      <div className="we-lead" style={{ height: "5vh" }}>
        WE <span className="stroke">LEAD</span> ORGANIZATIONS
        <br />
        INTO THEIR DIGITAL <span className="stroke">FUTURE</span>
      </div>
      <div className="projects">PROJECTS</div>
      <div className="b">{activeImage === 1 ? "01/09" : "02/09"}</div>

      <div className="main-container">
        <div className="image1 image-container" data-image-number="1">
          <img className="imagebg1" alt="" src={bg1} />
          <div className="position-absolute">
            <div className="iza-apparels ">IZA APPARELS</div>
          </div>
          <div className="case-study position-absolute">
            <div className="case-study-child">
              <div className="case-study">Case Study</div>
              <div className="case-study">WEBSITE DEVELOPMENT</div>
              <div className="case-study">CLOTHING</div>
            </div>
          </div>
          <button className="live-preview-button">Live Preview</button>
        </div>
        <div className="image2 image-container" data-image-number="2">
          <img src={bg2} className="imagebg2" />

          <div className="positi on-absolute">
            <div className="gelie-shrsta">GELIE SHRSTA</div>
          </div>
          <div className="case-study position-absolute">
            <div className="case-study-child1">
              <div className="case-study">Case Study</div>
              <div className="case-study">BRAND IDENTITY</div>
              <div className="case-study">CLOTHING</div>
            </div>
          </div>
          <button className="live-preview-button1">Live Preview</button>
        </div>
      </div>
    </div>
  );
}
export default Slider;
