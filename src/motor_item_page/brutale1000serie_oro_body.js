import React from "react";
import MvEmail from "../generalLayout/mvEmail";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import PageName from "../generalLayout/pageName";
import { ScrollNavFunction } from "../generalFunctionForOnScroll/ScrollEventFor_MotorPage";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import { FooterGe } from "../generalLayout/footer_test";
import Nav from "../generalLayout/nav";
import { NavWhiteCompact } from "../generalFunctionForOnScroll/ScrollEventFor_Homepage";
import NavDesktop from "../generalLayout/navDesk";

const heroGradientStart = "#161716";
const heroGradientEnd = "#525552";
const brutale1000serieoro_infor = {
  namePage: "Brutale 1000 SERIE ORO",
  colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
  header: {
    price: "42.990",
    nameHeaderTitle: "brutale1000serieoro/brutale-1000-serie-oro.svg",
    bgHeaderParallax:
      "brutale1000serieoro/brutale-1000-serie-oro-popup-xl-1.png",
    manifesto_Arr: ["FASTEST", "NAKED", "IN", "THE WORLD"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "The pursuit of the ultimate performance, with over 300 km/h top speed. Overcoming the limit of the tracks",
    titleSize: "auto 23%",
    reveredContent: true,
    heightContentTop: "13%",
  },
  Model3ds: [
    {
      link: "brutale1000serieoro/original/brutaleSerieOro",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "MATT SHOCK PEARL RED CARBON WITH MATT RED STRIPE",
    },
  ],
};
export default function BodyBrutale1000SerieOro() {
  // window.addEventListener("scroll", () => {
  //   ScrollNavFunction();
  //   NavWhiteCompact();
  // });

  return (
    <>
      <div
        className="nav-pc-homepage"
        style={{
          height: "84px",
          width: "100vw",
          background: brutale1000serieoro_infor.colorBg,
        }}
      ></div>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={brutale1000serieoro_infor.namePage} />
      <MotorPageHeader headerData={brutale1000serieoro_infor.header} />
      <Motor3d models={brutale1000serieoro_infor.Model3ds} />
    </>
  );
}
