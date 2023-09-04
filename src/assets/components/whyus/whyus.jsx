// import "./whyus.css";

// import React, { useState, useEffect } from "react";
// import { useScroll, animated, useSpring } from "@react-spring/web";
// function Whyus() {
//   const [circleVisible, setCircleVisible] = useState(false);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     if (scrollY > 200) {
//       setCircleVisible(true); // Show the circle
//     } else {
//       setCircleVisible(false); // Hide the circle
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div className="rectangle-us">
//       <div className="marquee-w">
//         <div className="marquee">
//           <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
//         </div>
//         <div className="marquee marquee2">
//           <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
//         </div>
//         <div className="marquee marquee3">
//           <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
//         </div>
//       </div>
//       <div className={`circle ${circleVisible ? "visible" : ""}`}>
//         <animated.div className="bordercircle">
//           <div className="circlecontent">
//             <div className="professional-and-technically-p-container">
//               <p className="professional">PROFESSIONAL</p>
//               <p className="professional">AND</p>
//               <p className="professional">TECHNICALLY</p>
//               <p className="professional">PROFICIENT</p>
//             </div>
//           </div>
//         </animated.div>
//       </div>
//     </div>
//   );
// }
// export default Whyus;

// <div className="rectangle-us">
//   <div className="marquee-w">
//     <div className="marquee">
//       <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
//     </div>
//     <div className="marquee marquee2">
//       <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
//     </div>
//     <div className="marquee marquee3">
//       <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
//     </div>
//   </div>
//   <div className="circle">
//     <div className=" bordercircle">
//       <div className="circlecontent">
//         <div className="professional-and-technically-p-container">
//           <p className="professional">PROFESSIONAL</p>
//           <p className="professional">AND</p>
//           <p className="professional">TECHNICALLY</p>
//           <p className="professional">PROFICIENT</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
import "./whyus.css";

import React, { useRef } from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";

function Whyus() {
  const whyusRef = useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    target: whyusRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: "0" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div className="rectangle-us">
      <div className="bodyss">
        <div className="whyus" ref={whyusRef}>
          <div className="marquee-w">
            <div className="marquee">
              <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className="marquee marquee2">
              <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className="marquee marquee3">
              <span>WHY CHOOSE US&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>

          <div className="animated__layers">
            <animated.div
              className="dot"
              style={{
                clipPath: scrollYProgress.to((val) => `circle(${val * 60}%)`),
              }}
            >
              <h1 className="title">
                <span>
                  <animated.span style={textStyles}>Aha!</animated.span>
                </span>
                <span>
                  <animated.span style={textStyles}>
                    You found me!
                  </animated.span>
                </span>
              </h1>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Whyus;
// import "./whyus.css";

// import React, { useRef } from "react";
// import { useScroll, animated, useSpring } from "@react-spring/web";

// function Whyus() {
//   const containerRef = useRef(null);
//   const textStylesRef = useRef(null);

//   const [textStyles, textApi] = useSpring(() => ({
//     y: "100%",
//   }));

//   const { scrollYProgress } = useScroll({
//     container: containerRef, // Use the ref directly without JSX
//     onChange: ({ scrollYProgress }) => {
//       if (scrollYProgress > 0.7) {
//         textApi.start({ y: "0%" }); // Set y to "0%" to match the animated circle's clipPath
//       } else {
//         textApi.start({ y: "100%" });
//       }
//     },
//     defaults: {
//       immediate: true,
//     },
//   });

//   return (
//     <div ref={containerRef} className="body">
//       <div className="marquee-w">{/* Your marquee code */}</div>

//       <div className="animated__layers">
//         <animated.div
//           className="dot"
//           style={{
//             clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
//           }}
//         >
//           <h1 className="title">
//             <span>
//               <animated.span style={textStyles}>Aha!</animated.span>
//             </span>
//             <span>
//               <animated.span style={textStyles}>You found me!</animated.span>
//             </span>
//           </h1>
//         </animated.div>
//       </div>
//     </div>
//   );
// }

// export default Whyus;
