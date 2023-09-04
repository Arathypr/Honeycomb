import { useState } from "react";

import "./App.css";

import HoneyComb from "./assets/components/honeycomb/honeycomb";
import Slider from "./assets/components/slider/slider";
import Brand from "./assets/components/piechart/piechart";
import Whyus from "./assets/components/Whyus/whyus";
import Circle from "./assets/components/Circle/Circle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HoneyComb />
      <Slider />
      <Brand />
      {/* <Circle /> */}
      {/* <Whyus /> */}
    </>
  );
}

export default App;
