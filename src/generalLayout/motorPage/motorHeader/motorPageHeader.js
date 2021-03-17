import React from "react";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";
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
        <Fade cascade>
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
                backgroundImage:
                  "url(./img/" + headerData.nameHeaderTitle + ")",
                backgroundSize: headerData.titleSize,
                height: headerData.heightContentTop,
              }}
            ></div>
            <div className="motorPageHeader-Content-center">
              <Fade bottom cascade>
                <div className="motorPageHeader-Content-center-top">
                  {headerData.manifesto_Arr.map((item, index) => (
                    <div className="motorPageHeader-manifesto">
                      <ScrollAnimation
                        delay={index * 300}
                        animateIn="fadeInUp"
                        animateOnce={true}
                      >
                        <p>{headerData.manifesto_Arr[index]}</p>
                      </ScrollAnimation>
                    </div>
                  ))}
                </div>
              </Fade>
              <div className="motorPageHeader-Content-center-bottom">
                <p>{headerData.contentHeaderContent}</p>
              </div>
            </div>

            <div className="motorPageHeader-Content-bottom">
              <p>Starting from {headerData.price} €</p>
            </div>
          </div>
        </Fade>
        <div
          className="xxxxx"
          style={{
            // backgroundImage: `url(./img/${headerData.bgHeaderParallax})`,
            width: "100%",
            height: "115vh",
            position: "sticky",
            top: 0,
            backgroundPosition: "left",
            backgroundSize: "cover",
          }}
        >
          <picture style={{ height: "100%" }}>
            <source
              media="(max-width: 991px)"
              srcset={`./img/${headerData.bgHeaderParallax_Small}`}
            ></source>
            <img
              src={`./img/${headerData.bgHeaderParallax_Large}`}
              alt=""
              height="100%"
            ></img>
          </picture>
        </div>
      </div>
    </>
  );
}
