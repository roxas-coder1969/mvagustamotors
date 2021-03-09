import React from "react";

export default function AlpineDiscover() {
  return (
    <>
      <div className="alpineDis-layout">
        <div className="alpineDis-container">
          <h3>The Superveloce Alpine limited edition</h3>
          <p>
            Underneath Alpine’s iconic blue livery, the Superveloce Alpine
            limited edition features the most advanced technology and MV
            Agusta’s signature 800 cc inline 3-cylinder engine for impressive
            performance, truly living up to the A110 legend.
          </p>
          <div className="alpineDis-bt">
            <a href>Discover alpine A110</a>
          </div>
          <div className="lmt-img-left">
            <picture>
              <source
                media="(max-width: 1500px)"
                srcset="./img/superveloceAlpine/moto-l.png"
              ></source>
              <img
                class="limited-edition__img"
                src="./img/superveloceAlpine/moto-xl.png"
                alt=""
              ></img>
            </picture>
          </div>
          <div className="lmt-img-right">
            <picture>
              <source
                media="(max-width: 1500px)"
                srcset="./img/superveloceAlpine/car-l.png"
              ></source>
              <img
                class="limited-edition__img"
                src="./img/superveloceAlpine/car-xl.png"
                alt=""
              ></img>
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
