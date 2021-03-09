import React from "react";
export default function DesignTips({designTips}) {
  return (
    <>
      <div className="designTips-layout">
        <div className="designTips-container">
          <div className="designTips-header">
            <span>{designTips.span}</span>
            <strong> {designTips.strong}</strong>
          </div>
          <p className="designTips-content">
            {designTips.p}
          </p>
          <div className="designTips-bt">
            <p>LEARN MORE </p>
            <span className="bt-plus bt-plus-icon"></span>
          </div>
        </div>
        <div
          className="designTips-bg parallax"
          style={{ backgroundImage: `url(./img/${designTips.src})` }}
        ></div>
      </div>
    </>
  );
}
