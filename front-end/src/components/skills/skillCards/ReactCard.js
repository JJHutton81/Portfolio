import "../skills.css";
import { render } from "react-dom";
import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import PieChart from "react-minimal-pie-chart";

import "../skills.css";

import Dragon from '../../../media/dragon.jpg';

export default function ReactCard() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div onClick={() => set(state => !state)}>
      <a.div
        className="SkillCard"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <img className="drag" src={Dragon} />
        <button className="cardButton">
          <p class="pButt">Click Me</p>
        </button>
      </a.div>
      <a.div
        className="SkillCard"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        <PieChart
          data={[
            {
              title: "One",
              value: 70,
              color: "#FF4136"
            }
          ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: "25px",
            fontFamily: "Stylish, sans-serif"
          }}
          style={{ height: "100px" }}
          labelPosition={0}
          startAngle={-25}
          lengthAngle={-360}
          animate
          animationDuration={3000}
          animationEasing={"ease-in-out"}
          rounded={"true"}
        />
        <h2 class="SkillTag">React</h2>
      </a.div>
    </div>
  );
}

render(<ReactCard />, document.getElementById("root"));
