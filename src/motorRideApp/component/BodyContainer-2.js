import React from 'react';

export function BodyContainer2({imgSrc}) {
    return (
      <>
        <div className="moto_list">
          <div className="moto_title">
            <h1>COMPATIBLE WITH</h1>
            <p>
              MV Agusta models equipped with second generation 5,5” TFT screens
            </p>
          </div>
          <div className="moto_list_content">
            {imgSrc.map((imgSrcData) => (
              <div className="moto_list_item">
                <div className="moto_list_picture">
                  <img
                    className="moto_list_img"
                    src={`/img/rideApp/${imgSrcData.imgSrc}`}
                    alt=""
                  ></img>
                </div>
                <div className="moto_list_name">
                  <strong>{imgSrcData.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}