import React from "react";

export function MotorRideAppImagesContainer({ src }) {
  return (
    <>
      <div className="Ride-App-Moto-List">
        <div className="moto_title">
          <h1>COMPATIBLE WITH</h1>
          <p>
            MV Agusta models equipped with second generation 5,5” TFT screens
          </p>
        </div>
        <div className="moto_list_content">
          {src.map((imgSrcData) => (
            <div className="moto_list_item">
              <div className="moto_list_picture">
                <img
                  className="moto_list_img"
                  src={`/img/${imgSrcData.imgSrc}`}
                  alt=""
                ></img>
              </div>
              <div className="moto_list_name">{imgSrcData.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
