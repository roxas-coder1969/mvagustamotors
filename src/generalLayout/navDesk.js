import React, { useEffect } from "react";
const navMotorsData = [
  {
    type: "RUSH",
    img_pop: "rush-pop.webp",
    models: [
      {
        name: "1000",
        link: "rush1000",
        imgModelSrc: "rush-1000.webp",
        imgLogoSrc: "rush-1000.svg",
        prize: "34.000",
        cylinders: 4,
        capacity: 998,
        hp: 208,
      },
    ],
  },
  {
    type: "BRUTALE",
    img_pop: "brutale-pop.webp",
    models: [
      {
        name: "ROSSO",
        imgModelSrc: "brutale-800-rosso.webp",
        imgLogoSrc: "brutale-800-rosso-pop.svg",
        prize: "13.400",
        cylinders: 3,
        capacity: 798,
        hp: 110,
      },
      {
        name: "RR",
        imgModelSrc: "brutale-800-rr.webp",
        imgLogoSrc: "brutale-800-rr-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 140,
      },
      {
        name: "RR SCS",
        imgModelSrc: "brutale-800-rr-scs.webp",
        imgLogoSrc: "brutale-800-rr-scs-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 140,
      },
      {
        name: "1000 RR",
        link: "brutale1000rr",
        imgModelSrc: "brutale-1000-rr.webp",
        imgLogoSrc: "brutale-1000-rr-pop.svg",
        prize: "34.000",
        cylinders: 4,
        capacity: 998,
        hp: 208,
      },
      // {
      //   name: "1000 SERIE ORO",
      //   link: "brutale1000serieoro",
      //   imgModelSrc: "brutale-1000-serie-oro.webp",
      //   imgLogoSrc: "brutale-1000-serie-oro-pop.svg",
      //   prize: "34.000",
      //   cylinders: 4,
      //   capacity: 998,
      //   hp: 208,
      // },
    ],
  },
  {
    type: "DRAGSTER",
    img_pop: "dragster-pop.webp",
    models: [
      {
        name: "ROSSO",
        link: "dragster800rosso",
        imgModelSrc: "dragster-800-rosso.webp",
        imgLogoSrc: "dragster-800-rosso-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 110,
      },
      {
        name: "RR",
        link: "dragster800rr",
        imgModelSrc: "dragster-800-rr-2021.webp",
        imgLogoSrc: "dragster-800-rr-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 140,
      },
      {
        name: "RR SCS",
        link: "dragster800rrscs",
        imgModelSrc: "dragster-800-rr-scs-2021.webp",
        imgLogoSrc: "dragster-800-rr-scs-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 140,
      },
      {
        name: "RC SCS",
        imgModelSrc: "dragster-800-rc-scs.webp",
        imgLogoSrc: "dragster-800-rc-scs-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 150,
      },
    ],
  },
  {
    type: "TURISMO VELOCE",
    img_pop: "turismo-veloce-pop.webp",
    models: [
      {
        name: "800 ROSSO",
        imgModelSrc: "tv-800-rosso.webp",
        imgLogoSrc: "turismo-veloce-800-rosso-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 110,
      },
      {
        name: "800 LUSSO",
        imgModelSrc: "tv-800-rosso-scs.webp",
        imgLogoSrc: "turismo-veloce-800-lusso-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 110,
      },
      {
        name: "800 LUSSO SCS",
        imgModelSrc: "tv-800-lusso-scs.webp",
        imgLogoSrc: "turismo-veloce-800-lusso-scs-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 110,
      },
      {
        name: "800 RC SCS",
        imgModelSrc: "tv-800-rc-scs.webp",
        imgLogoSrc: "turismo-veloce-800-rc-scs-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 110,
      },
    ],
  },
  {
    type: "F3",
    img_pop: "f3-pop.webp",
    models: [
      {
        name: "800",
        imgModelSrc: "f3-800.webp",
        imgLogoSrc: "f3-800-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 153,
      },
      {
        name: "800 RC",
        imgModelSrc: "f3-800-rc.webp",
        imgLogoSrc: "f3-800-rc-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 153,
      },
    ],
  },
  {
    type: "SUPERVELOCE",
    img_pop: "superveloce-pop.webp",
    models: [
      {
        name: "800",
        imgModelSrc: "sp-800.webp",
        imgLogoSrc: "superveloce-800-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 148,
      },
      {
        name: "ALPINE",
        link: "superveloce-alpine",
        imgModelSrc: "sp-alpine.webp",
        imgLogoSrc: "superveloce-alpine-pop.svg",
        prize: "34.000",
        cylinders: 3,
        capacity: 798,
        hp: 147,
      },
    ],
  },
];
export default function NavDesktop({ colorBlack }) {
  function addItem_Active_Default() {
    for (
      var key = 0;
      key < document.getElementsByClassName("mv-nav-type-pc").length;
      key++
    ) {
      document
        .getElementsByClassName("mv-nav-type-pc")
        [key].classList.remove("mv-nav-item__active_default");
      document
        .getElementsByClassName("motor-name-layout")
        [key].classList.remove("motor-name-layout-active");
    }
    document
      .getElementsByClassName("mv-nav-type-pc")[0]
      .classList.add("mv-nav-item__active_default");
    document
      .getElementsByClassName("motor-name-layout")[0]
      .classList.add("motor-name-layout-active");
  }
  function changeItem_Active(i) {
    for (
      var key = 0;
      key < document.getElementsByClassName("mv-nav-type-pc").length;
      key++
    ) {
      document
        .getElementsByClassName("mv-nav-type-pc")
        [key].classList.remove("mv-nav-item__active_default");
      document
        .getElementsByClassName("motor-name-layout")
        [key].classList.remove("motor-name-layout-active");
    }
    document
      .getElementsByClassName("mv-nav-type-pc")
      [i].classList.add("mv-nav-item__active_default");
    document
      .getElementsByClassName("motor-name-layout")
      [i].classList.add("motor-name-layout-active");
  }
  function refuseItem_Active(i) {
    for (
      var key = 0;
      key < document.getElementsByClassName("motor-name-layout").length;
      key++
    ) {
      document
        .getElementsByClassName("motor-name-layout")
        [key].classList.add("motor-name-layout-refuse");
    }
    console.log("name" + i);
  }
  function addItem_Active(i) {
    for (
      var key = 0;
      key < document.getElementsByClassName("motor-name-layout").length;
      key++
    ) {
      document
        .getElementsByClassName("motor-name-layout")
        [key].classList.remove("motor-name-layout-refuse");
    }
  }
  useEffect(() => {
    document
      .getElementsByClassName("mv-nav-type-pc")[0]
      .classList.add("mv-nav-item__active_default");
    document
      .getElementsByClassName("motor-name-layout")[0]
      .classList.add("motor-name-layout-active");
    document
      .getElementsByClassName("mv-nav-desktop")[0]
      .addEventListener("mouseout", addItem_Active_Default);
    for (
      var k = 0;
      k < document.getElementsByClassName("mv-nav-dk").length;
      k++
    ) {
      document
        .getElementsByClassName("mv-nav-dk")
        [k].addEventListener("mouseover", () => {
          document
            .getElementsByClassName("mv-nav-desktop")[0]
            .classList.add("mv-nav-desk__white");
          document.getElementById("nav-logo").style.display = "none";
        });
      document
        .getElementsByClassName("mv-nav-dk")
        [k].addEventListener("mouseout", () => {
          document
            .getElementsByClassName("mv-nav-desktop")[0]
            .classList.remove("mv-nav-desk__white");
          document.getElementById("nav-logo").style.display = "block";
        });
    }
    for (
      var i = 0;
      i < document.getElementsByClassName("mv-nav-type-pc").length;
      i++
    ) {
      document
        .getElementsByClassName("mv-nav-type-pc")
        [i].addEventListener(
          "mouseover",
          changeItem_Active.bind(Event, i),
          false
        );
    }
    for (
      var i = 0;
      i < document.getElementsByClassName("motor-name-pc").length;
      i++
    ) {
      document
        .getElementsByClassName("motor-name-pc")
        [i].addEventListener(
          "mouseover",
          refuseItem_Active.bind(Event, i),
          true
        );
      document
        .getElementsByClassName("motor-name-pc")
        [i].addEventListener("mouseout", addItem_Active.bind(Event, i), true);
    }
  });
  const colorNavTag = colorBlack ? "" : "colorReverse";
  return (
    <>
      <nav className="mv-nav-desktop">
        <ul>
          <li
            className={"mv-nav-dk mv-nav-left " + colorNavTag}
            id="motorcycles-nav"
          >
            <a href>Motorcycles</a>
            <ul className="mv-nav-type-layout">
              {navMotorsData.map((navMotorData) => (
                <li className="mv-nav-type-pc">
                  <a href>
                    {navMotorData.type}
                    <img
                      alt=""
                      src={`./img/img-tag/${navMotorData.img_pop}`}
                      height="100%"
                    ></img>
                  </a>
                  <ul className="motor-name-layout">
                    {navMotorData.models.map((model) => (
                      <NavModel model={model} />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={"mv-nav-dk mv-nav-left " + colorNavTag}
            id="ownership-tag-nav"
          >
            <a href>OwnerShip</a>
            <NavOwnership />
          </li>
          <li className={"mv-nav-dk mv-nav-right " + colorNavTag}>
            <a href>EN</a>
          </li>
          <li
            className={"mv-nav-dk mv-nav-right " + colorNavTag}
            id="store-tag-nav"
          >
            <a href>Store</a>
            <NavStore />
          </li>
          <li className={"mv-nav-dk mv-nav-right " + colorNavTag}>
            <a href>Dealer</a>
          </li>
          <li
            className={"mv-nav-dk mv-nav-right " + colorNavTag}
            id="company-tag-nav"
          >
            <a href>Company</a>
            <NavCompany />
          </li>
        </ul>

        <a href="homepage" style={{ width: "140px" }}>
          <img
            alt=""
            src="./img/mv-agusta-logo.png"
            id="nav-logo"
          ></img>
        </a>
      </nav>
    </>
  );
}
const NavOwnership = () => {
  return (
    <>
      <div className="mv-pr-layout nav-ownership">
        <div className="ownership-container">
          <a href="buy-your-mv">
            Buy Your MV
            <div>
              THE 7-STEP JOURNEY TO BECOMING THE PROUD OWNER OF AN MV AGUSTA
            </div>
          </a>
          <a href="special-deals">
            Special Deals
            <div>
              DISCOVER ALL THE SPECIAL DEALS, ONLINE OR AT AN OFFICIAL MV AGUSTA
              DEALER NEAR YOU
            </div>
          </a>
          <a href="mv-ride-app">
            MV Ride App
            <div>
              GET CONNECTED TO YOUR BIKE AND LIVE THE MV AGUSTA DIGITAL
              EXPERIENCE
            </div>
          </a>
          <a href="service-locator">
            Service Locator
            <div>
              WORLD-CLASS, SPECIALISED SERVICE FOR YOUR MV AGUSTA IS ALWAYS
              AVAILABLE AT AN OFFICIAL DEALER NEAR YOU
            </div>
          </a>
          <a href="warranty">
            Warranty
            <div>
              ALL THE DETAILS OF YOUR STANDARD 3 YEARS MANUFACTURER’S WARRANTY,
              AND HOW TO EXTEND IT
            </div>
          </a>
          <a href="road-assistance">
            Road Assistance
            <div>
              MV AGUSTA STANDS BY YOUR SIDE 24/7 FOR CAREFREE RIDING WHEREVER
              YOU ARE
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
const NavStore = () => {
  return (
    <>
      <div className="mv-pr-layout nav-store">
        <div className="store-container">
          <h3>Special Part</h3>
          <span>Upgrade to next level</span>
          <div className="store-nav__img">
            <img alt="" src="./img/special_parts.png"></img>
          </div>
        </div>
        <div className="store-container">
          <h3>Apparel</h3>
          <span>We ride it. We wear it</span>
          <div className="store-nav__img">
            <img alt="" src="./img/apparel.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};
const NavCompany = () => {
  return (
    <>
      <div className="mv-pr-layout nav-company">
        <div className="company-container">
          <h3>OUT BRAND</h3>
          <a href="certificate">Certificate</a>
          <a href="about-us">About Us</a>
          <a href="history">History</a>
          <a href="research-center">Research Center</a>
          <a href="contact-us">Contact Us</a>
        </div>
        <div className="company-container">
          <h3>MV WORLD</h3>
          <a href="monaco-design-studio">Monaco Design Studio</a>
        </div>
        <div className="company-container">
          <h3>FOLLOW US</h3>
          <a href="instagram">Instagram</a>
          <a href="facebook">Facebook</a>
          <a href="youtube">Youtube</a>
        </div>
      </div>
    </>
  );
};
const NavModel = ({ model }) => {
  return (
    <>
      <li className="motor-name-pc">
        <a href={model.link}>{model.name}</a>
        <ul className="motor-infor-layout">
          <li className="motor-infor">
            <div className="motor-infor-lt">
              <img
                width="100%"
                src={`./img/navDesktop/motor-banner/${model.imgModelSrc}`}
                alt=""
              ></img>
              <div className="motor-if-lt">
                <div className="mt-if-money">
                  <img
                    //   maxWidth= "320px"
                    style={{
                      maxWidth: "calc(20vw)",
                      maxHeight: "30px",
                    }}
                    alt=""
                    src={`./img/navDesktop/motor-i/${model.imgLogoSrc}`}
                  ></img>
                  <p>
                    Starting from <span>{model.prize} $</span>
                  </p>
                </div>
                <div className="mt-if-tech-lt">
                  <div className="motor-if-tech">
                    <strong>{model.cylinders}</strong>
                    <p>Cylinders</p>
                  </div>
                  <div className="motor-if-tech">
                    <strong>
                      {model.capacity}
                      <span>CC</span>
                    </strong>
                    <p>Capacity</p>
                  </div>
                  <div className="motor-if-tech">
                    <strong>
                      {model.hp}
                      <span>HP</span>
                    </strong>
                    <p>Horsepower</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};
