import React from "react";
import { useSpring, animated } from "react-spring";

export const SpringLoading = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(2)"},
    to: [{ opacity: 1, transform: "scale(1)" },{ opacity: 0, transform: "scale(0.2)" },{ opacity: 1, transform: "scale(1)" }],
    delay: 1000,
  });
  return (
    <animated.div style={props} className="sofia w-100 vh-100 d-flex align-items-center justify-content-center">
      Loading
    </animated.div>
  );
};
