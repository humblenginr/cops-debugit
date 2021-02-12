import React from "react";
import { useSpring, animated } from "react-spring";
import { Loading } from "../intermediateStates/Loading";


export const SpringLoading = ({windowWidth}) => {
  console.log(windowWidth);
  const props = useSpring({
    from: { opacity: 1, transform: "scale(1.2)", name: "Fetching Data..."},
    to: [{ opacity: 0 }, {opacity: 1,name: "Setting up calendar..."},{ opacity: 0 },{opacity: 1,name: "Configuring profile..."}],
    delay: 500
  });
    const bgProps = useSpring({
      config:{duration: 3500},
      from: {width: "0", zIndex:"-2"},
      to: [{width: (windowWidth ? windowWidth : 0)}]
    })
  return (
    <>
   {windowWidth ?  <animated.div className="vh-100 position-absolute lavendar"  style={bgProps}/> : null}
    <Loading render={() =>     <animated.div style={props} className="sofia mt-5 mb-5">
      {props.name}
    </animated.div>}/>

    </>
  );
};
