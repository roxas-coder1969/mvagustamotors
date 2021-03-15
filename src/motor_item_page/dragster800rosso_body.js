import React from "react";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import PageName from "../generalLayout/pageName";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
const heroGradientStart = "#252524";
const heroGradientEnd = "#222121";
const dragster800rosso_infor = {
  namePage: "Dragster 800 Rosso",
  colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
  header: {
    price: "13.400",
    nameHeaderTitle: "dragster800rosso/dragster-800-rosso.svg",
    bgHeaderParallax_Large: "dragster800rosso/dragster-800-rosso-xl.png",
    manifesto_Arr: ["YOUR", "DREAM", "STARTS", "HERE"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "All the guts, the power and the character of a true Dragster. Accessible, pure riding pleasure.",
    titleSize: "auto 12%",
    reveredContent: false,
    heightContentTop: "23%",
  },
  Model3ds: [
    {
      link: "dragster800rosso/original/dragster800rosso",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "MATT AGO RED",
    },
  ],
};
export default function Dragster800Rosso() {
  // window.addEventListener("scroll", () => {
  //   ScrollNavFunction();
  //   NavWhiteCompact();
  // });
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={dragster800rosso_infor.namePage}></PageName>
      <MotorPageHeader headerData={dragster800rosso_infor.header} />
      <Motor3d models={dragster800rosso_infor.Model3ds} />
      
    </>
  );
}
