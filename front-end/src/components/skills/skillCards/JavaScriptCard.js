import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import PieChart from 'react-minimal-pie-chart';

import '../skills.css';

export default function JavaScriptCard() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div className="SkillCard" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <PieChart data={[
          {
            title: 'One',
            value: 60,
            color: '#FF4136'
          },
        ]}
          totalValue={100}
          lineWidth={20}
          label
          labelStyle={{
            fontSize: '25px',
            fontFamily: 'Stylish, sans-serif'
          }}
          style={{ height: '200px' }}
          labelPosition={0}
          startAngle={-25}
          lengthAngle={-360}
          animate
          animationDuration={3000}
          animationEasing={"ease-in-out"}
          rounded={'true'}
        />
        <h2 class='SkillTag'>JavaScript</h2>
      </a.div>
      <a.div className="SkillCard" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
        <h3>JavaScript often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</h3>
      </a.div>
    </div>
  )
}

render(<JavaScriptCard />, document.getElementById('root'))