import "./piechart.css";
import Ellipse1 from "../../images/Ellipse1.png";
import Ellipse2 from "../../images/Ellipse2.png";
import Ellipse3 from "../../images/Ellipse3.png";
import group3 from "../../images/group3.svg";
import group4 from "../../images/group4.svg";
import group5 from "../../images/group5.svg";

import React from "react";

function Brand() {
  return (
    <div className="rectangle-div container-fluid">
      <div className="pie-chart-container position-absolute">
        <img
          src={Ellipse1}
          alt="Segment 1"
          className="chart-segment"
          id="segment1"
        />
        <img
          src={Ellipse2}
          alt="Segment 2"
          className="chart-segment"
          id="segment2"
        />
        <img
          src={Ellipse3}
          alt="Segment 3"
          className="chart-segment"
          id="segment3"
        />
      </div>
    </div>
  );
}

export default Brand;
