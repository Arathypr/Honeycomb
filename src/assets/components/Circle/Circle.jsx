import React, { useState, useEffect } from "react";
import "./Circle.css";
import { motion } from "framer-motion";

function Circle() {
  const circleDataMap = {
    healthcare: {
      data1: "Healthcare\nService 1",
      data2: "Healthcare\nService 2",
      data3: "Healthcare\nService 3",
      data4: "Healthcare\nService 4",
      data5: "Healthcare\nService 5",
      data6: "Healthcare\nService 6",
      data7: "Healthcare\nService 7",
      data8: "Healthcare\nService 8",
      data9: "Healthcare\nService 9",
      data10: "Healthcare\nService 10",
    },
    engineering: {
      data1: "Engineering\nService 1",
      data2: "Engineering\nService 2",
      data3: "Engineering\nService 3",
      data4: "Engineering\nService 4",
      data5: "Engineering\nService 5",
      data6: "Engineering\nService 6",
      data7: "Engineering\nService 7",
      data8: "Engineering\nService 8",
      data9: "Engineering\nService 9",
      data10: "Engineering\nService 10",
    },
    ecommerce: {
      data1: "E-Commerce\nService 1",
      data2: "E-Commerce\nService 2",
      data3: "E-Commerce\nService 3",
      data4: "E-Commerce\nService 4",
      data5: "E-Commerce\nService 5",
      data6: "E-Commerce\nService 6",
      data7: "E-Commerce\nService 7",
      data8: "E-Commerce\nService 8",
      data9: "E-Commerce\nService 9",
      data10: "E-Commerce\nService 10",
    },
    travelandhospitality: {
      data1: "Travel &\n Hospitality\nService 1",
      data2: "Travel &\n Hospitality\nService 2",
      data3: "Travel &\n Hospitality\nService 3",
      data4: "Travel & \nHospitality\nService 4",
      data5: "Travel & \nHospitality\nService 5",
      data6: "Travel &\n Hospitality\nService 6",
      data7: "Travel &\n Hospitality\nService 7",
      data8: "Travel &\n Hospitality\nService 8",
      data9: "Travel &\n Hospitality\nService 9",
      data10: "Travel &\n Hospitality\nService 10",
    },
    digitalmarketing: {
      data1: "Digital\n Marketing mService 1",
      data2: "Digital \nMarketing\nService 2",
      data3: "Digital\n Marketing\nService 3",
      data4: "Digital \nMarketing\nService 4",
      data5: "Digital\n Marketing\nService 5",
      data6: "Digital\n Marketing\nService 6",
      data7: "Digital \nMarketing\nService 7",
      data8: "Digital \nMarketing\nService 8",
      data9: "Digital\n Marketing\nService 9",
      data10: "Digital\n Marketing\nService 10",
    },
  };

  //datachange
  const [currentDataKey, setCurrentDataKey] = useState("healthcare");
  const [circleData, setCircleData] = useState(circleDataMap[currentDataKey]);

  const handleButtonClick = (dataKey) => {
    setCurrentDataKey(dataKey);
    setCircleData(circleDataMap[dataKey]);
  };
  const [animateCircles, setAnimateCircles] = useState(false); // Define animateCircles state

  const handleScroll = () => {
    const triggerPoint = window.innerHeight * 0.7;
    if (window.scrollY > triggerPoint) {
      setAnimateCircles(true); // Set animateCircles to true when scrolled to the trigger point
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`rectangle-circle ${animateCircles ? "animate" : ""}`}>
      <div className="no-fuzz-no-container">
        <p className="no-fuzz-no">NO FUZZ, NO BULLSHIT</p>
        <p className="services-done-on">SERVICES DONE ON TRUST</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="big-circle">
              <motion.div
                className="circle1 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data1">
                  {circleData.data1.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div
                className="circle2 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data2">
                  {circleData.data2.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <div className="circle3 position-absolute">
                <p className="data3">
                  {circleData.data3.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <motion.div
                className="circle4 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data4">
                  {circleData.data4.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div className="circle5 position-absolute">
                <p className="data5">
                  {circleData.data5.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div
                className="circle6 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data6">
                  {circleData.data6.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div
                className="circle7 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data7">
                  {circleData.data7.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div
                className="circle8 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data8">
                  {circleData.data8.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div
                className="circle9 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data9">
                  {circleData.data9.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
              <motion.div
                className="circle10 position-absolute"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
              >
                <p className="data10">
                  {circleData.data10.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="button-col">
              <div className="button-container">
                <div className="d-flex flex-wrap justify-content-end align-items-end main-button col">
                  <button
                    type="button"
                    className="btn btn-outline-light mb-2 custom-btn"
                    onClick={() => handleButtonClick("healthcare")}
                  >
                    HEALTHCARE
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light mb-2 custom-btn"
                    onClick={() => handleButtonClick("engineering")}
                  >
                    ENGINEERING
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light mb-2 custom-btn"
                    onClick={() => handleButtonClick("ecommerce")}
                  >
                    E-COMMERCE
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light mb-2 custom-btn"
                    onClick={() => handleButtonClick("travelandhospitality")}
                  >
                    TRAVEL & HOSPITALITY
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light mb-2 custom-btn"
                    onClick={() => handleButtonClick("digitalmarketing")}
                  >
                    DIGITAL MARKETING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circle;
