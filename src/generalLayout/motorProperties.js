import React from "react";

export default function MotorProperties({properties}) {
  return (
    <>
      <section className="mtProperties-layout">
        <div className="mtProperties-container">
          <div className="mtProperties-content">
            <div>{properties.cylinders}</div>
            <span>Cylinders</span>
          </div>
          <div className="mtProperties-content">
            <div>
              {properties.hp}
              <span>Hp</span>
            </div>
            <span>Engine max Power @ {properties.engineMaxAt} R.P.M</span>
          </div>
          <div className="mtProperties-content">
            <div>
              {properties.topSpeed}
              <span>Km/h</span>
            </div>
            <span>Max speed</span>
          </div>
          <div className="mtProperties-content">
            <div>
              {properties.cc}
              <span>CC</span>
            </div>
            <span>Engine displacement</span>
          </div>
          <div className="mtProperties-content">
            <div>
              {properties.kg}
              <span>Kg</span>
            </div>
            <span>Dry weight</span>
          </div>
          <div className="mtProperties-content">
            <div>{properties.ratio}</div>
            <span>Compression ratio</span>
          </div>
          <div className="bt-lt-tc">
            <a href className="tech-bt">
              TECH SPECS
            </a>
          </div>
        </div>
        <picture className="mtProperties-Picture">
          <source
            media="(max-width: 575px)"
            srcset={`./img/${properties.scr.small}`}
            type="image/jpg"
          ></source>
          <source
            media="(max-width: 991px)"
            srcset={`./img/${properties.scr.medium}`}
            type="image/jpg"
          ></source>
          <source
            media="(max-width: 1500px)"
            srcset={`./img/${properties.scr.large}`}
            type="image/jpg"
          ></source>
          <img
            className="properties__img"
            alt=""
            srcset={`./img/${properties.scr.large}`}
          ></img>
        </picture>
      </section>
    </>
  );
}
