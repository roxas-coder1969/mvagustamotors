import React from "react";

export default function MvEngineMotor({engineInf}) {
  return (
    <>
      <div className="engineMotor-layout">
        <div className="engineMotor-img">
          <img alt="" src={`./img/${engineInf.src}`} width="100%"></img>
        </div>
        <div className="engineMotor-container">
          <strong className="engineMotor-title">
            {engineInf.title.top} <br></br>{engineInf.title.bottom}
          </strong>
          <p className="engineMotor-content">
            {engineInf.content}
          </p>
          <div className="engineMotor-bt"><a href>PLAY</a></div>
        </div>
      </div>
    </>
  );
}
