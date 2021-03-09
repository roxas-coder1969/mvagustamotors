import React from "react";
// import { Spring } from "react-spring/renderprops";
export function MvSpecialModel() {
  return (
    // <Spring
    //   from={{ opacity: 0, marginTop: -200, transition: "0.28s ease" }}
    //   to={{ opacity: 1, marginTop: 0, transition: "0.2s ease" }}
    // >
      // {(props) => (
        <>
          <div className="mv-special-model-bg parallax"></div>
          <div className="sm-small-title">
            <p>SERIES</p>
          </div>
          {/* <div className="sm-content" style={props}> */}
          <div className="sm-content">
            <p>ROSSO RR SCS RC ORO</p>
          </div>
          <div className="sm-warning">
            <p>No easy-access range has ever been </p>
            <br />
            <p>so high-tech and full of charm</p>
          </div>
          <div className="sm-skew"></div>
        </>
      // )}
    // </Spring>
  );
}
