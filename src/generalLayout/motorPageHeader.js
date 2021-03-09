import React from "react";
import { Spring } from "react-spring/renderprops";

export default function MotorPageHeader({ headerData }) {
  return (
    <>
      <div
        className="motorPageHeader"
        style={{
          // backgroundImage: "url(./img/dragster800rrscs/dragster-800-rr-xl.png)",
          background: `${headerData.colorBg}`,
          position: "relative",
        }}
      >
        <div
          className="motorPageHeader-Content"
          style={{
            zIndex: 10,
            left: headerData.reveredContent === true ? 0 : null,
          }}
        >
          <div
            className="motorPageHeader-Content-top"
            style={{
              backgroundImage: "url(./img/" + headerData.nameHeaderTitle + ")",
              backgroundSize: headerData.titleSize,
              height: headerData.heightContentTop,
            }}
          ></div>
          <div className="motorPageHeader-Content-center">
            <div className="motorPageHeader-Content-center-top">
              {headerData.manifesto_Arr.map((item, index) => (
                <div className="motorPageHeader-manifesto">
                  <p>{headerData.manifesto_Arr[index]}</p>
                </div>
              ))}
            </div>

            <div className="motorPageHeader-Content-center-bottom">
              <p>{headerData.contentHeaderContent}</p>
            </div>
          </div>

          <div className="motorPageHeader-Content-bottom">
            <p>Starting from {headerData.price} €</p>
          </div>
        </div>
        <div
          className="xxxxx"
          style={{
            backgroundImage: `url(./img/${headerData.bgHeaderParallax})`,
            width: "100%",
            height: "115vh",
            position: "sticky",
            top: 0,
            backgroundPosition: "left",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
}
