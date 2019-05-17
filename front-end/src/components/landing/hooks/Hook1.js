import React from 'react';
import { useSpring, animated } from 'react-spring';

function HookedComponent() {
    const [props] = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: '2000'
    })
    return <animated.div style={props}><h1 class='landingTitle'>Hello, I'm James Hutton.</h1></animated.div>
}

export default HookedComponent;