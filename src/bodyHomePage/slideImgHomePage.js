import React from "react";
import { Fade } from "react-slideshow-image";
import { Spring } from "react-spring/renderprops";
import "react-slideshow-image/dist/styles.css";
export default function SlideImgHomepage() {
  const bgSlides = [
    {
      titleSrc: "",
      imgSrc: {
        large: "reveal-xl.png",
        medium: "reveal-m.png",
        small: "reveal-s.png",
      },
      bgColor: "linear-gradient(90deg, #00213D 0%, #020308 100%)",
      titleHeight: "33%",
      color: "black",
      content: ["2021", "REVEAL"],
    },
    {
      titleSrc: "dragster-2021-logo.svg",
      imgSrc: {
        large: "dragster-2021-xl.png",
        medium: "dragster-2021-m.png",
        small: "dragster-2021-s.png",
      },
      bgColor: "linear-gradient(90deg, #00213D 0%, #020308 100%)",
      titleHeight: "34%",
      color: "black",
      content: ["DRAGSTER", "2021", "UPDATE"],
    },
    {
      titleSrc: "brutale-2021-logo.svg",
      imgSrc: {
        large: "brutale-2021-xl.png",
        medium: "brutale-2021-m.png",
        small: "brutale-2021-s.png",
      },
      bgColor: "linear-gradient(90deg, #00213D 0%, #020308 100%)",
      titleHeight: "34%",
      color: "black",
      content: ["BRUTALE", "2021", "UPDATE"],
    },
    {
      titleSrc: "sv-alpine-logo.svg",
      imgSrc: {
        large: "superveloce-alpine-xl.png",
        medium: "superveloce-alpine-m.png",
        small: "superveloce-alpine-s.png",
      },
      bgColor: "linear-gradient(90deg, #00213D 0%, #020308 100%)",
      titleHeight: "34%",
      color: "black",
      content: ["DISCOVER", '"LE"', "BIKE"],
    },
    {
      titleSrc: "superveloce-75-anniversario.svg",
      imgSrc: {
        large: "superveloce-75-xl.png",
        medium: "superveloce-75-m.png",
        small: "superveloce-75-s.png",
      },
      bgColor:
        "linear-gradient(90deg, rgba(137,1,1,1) 0%, rgba(172,24,24,1) 100%)",
      titleHeight: "34%",
      color: "#8a1413",
      content: ["CELEBRATE", "THE", "POWER"],
    },
  ];
  // const [widthOfDevice, setWidthOfDevice] = useState("");
  const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    // indicators: true,
    canSwipe: true,
    scale: 0.4,
    pauseOnHover: false,
    // indicators: (i) => <div className="indicator"></div>,
    prevArrow: (
      <div
        style={{
          width: "300px",
          marginRight: "0",
          position: "absolute",
          left: 0,
          height: "100vh",
          display: "none",
        }}
      ></div>
    ),
    nextArrow: (
      <div
        style={{
          width: "300px",
          marginRight: "0",
          position: "absolute",
          right: 0,
          height: "100vh",
          display: "none",
        }}
      ></div>
    ),
  };

  // useEffect(() => {
  //   ReactDOM.render(<SlideImgHomepage />, document.getElementById("main-bg"));
  // }, [widthOfDevice]);
  // window.addEventListener("resize", reportWindowSize);
  // function reportWindowSize() {
  //   setWidthOfDevice(window.innerWidth);
  // }
  // if (window.outerWidth > 750) {
  return (
    <>
      <div style={{ transition: "1s ease" }}>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <Fade {...properties} style={props}>
              {bgSlides.map((bgSlide, index) => (
                <div
                  className="each-fade"
                  style={{ background: bgSlide.bgColor }}
                >
                  <div>
                    <div className="slideImgContentLayout">
                      <div
                        className="slideImgContentLayout_top"
                        style={{ height: bgSlide.titleHeight }}
                      >
                        <div
                          className="img-bg-title"
                          style={{
                            backgroundImage:
                              "url(./img/homepage/" + bgSlide.titleSrc + ")",
                          }}
                        ></div>
                      </div>
                      <div className="slideImgContentLayout_center">
                        {bgSlide.content.map((bgContent) => (
                          <div className="sp-ly" style={{ color: "white" }}>
                            <p style={props}>{bgContent}</p>
                          </div>
                        ))}
                        <div className="bt-layout">
                          <button
                            type="button"
                            id={"bt-tt-" + index}
                            className="bt-tt-sl"
                          >
                            <a style={{ color: bgSlide.color }} href>
                              LEARN MORE
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                    <picture>
                      <source
                        media="(max-width: 575px)"
                        srcSet={"./img/homepage/small/" + bgSlide.imgSrc.small}
                        type="image/png"
                      ></source>
                      <source
                        media="(max-width: 991px)"
                        srcSet={
                          "./img/homepage/medium/" + bgSlide.imgSrc.medium
                        }
                        type="image/png"
                      ></source>
                      <source
                        media="(max-width: 1500px)"
                        srcSet={"./img/homepage/large/" + bgSlide.imgSrc.large}
                        type="image/png"
                      ></source>
                      <source
                        media="(min-width: 1501px)"
                        srcSet={"./img/homepage/large/" + bgSlide.imgSrc.large}
                        type="image/png"
                      ></source>
                      <img
                        alt=""
                        src={"./img/homepage/large/" + bgSlide.imgSrc.large}
                      />
                    </picture>
                  </div>
                </div>
              ))}
            </Fade>
          )}
        </Spring>
      </div>
    </>
  );
}
