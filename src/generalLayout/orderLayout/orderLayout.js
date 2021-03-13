import React from "react";
import "./orderPage.css"
export default function OrderLayout({ modelName, price }) {
  return (
    <div className="orderPage-Layout">
      <h3>RESERVE YOUR BIKE NOW</h3>
      <span>{modelName}</span>
      <strong>STARTING FROM {price} €</strong>
      <p>
        MV Agusta offers a 3-year warranty on the whole range, as well as
        professional servicing.
      </p>
      <a href >
        <span>ORDER NOW</span>
      </a>
    </div>
  );
}
