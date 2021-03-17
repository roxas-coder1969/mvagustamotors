import React from "react";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import PageName from "../generalLayout/pageName";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";

const heroGradientStart = "#363531";
const heroGradientEnd = "#161514";
const brutale1000rr_infor = {
  namePage: "Brutale 1000 RR",
  colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
  header: {
    price: "31.500",
    nameHeaderTitle: "brutale1000rr/brutale-1000-rr.svg",
    bgHeaderParallax_Large: "brutale1000rr/brutale-1000-rr-xl.png",
    bgHeaderParallax_Small: "brutale1000rr/brutale-1000-rr-m.png",
    manifesto_Arr: ["THE", "ALL-OUT", "HYPER", "NAKED"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "F1-derived technology for out-of-this-world performance, and the first fully connected bike you can control through the MVRide app.",
    titleSize: "auto 19%",
    reveredContent: false,
    heightContentTop: "22%",
  },
  Model3ds: [
    {
      link: "brutale1000rr/original/1000rr",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "AGO RED DARK METALLIC MATT GREY",
    },
    {
      link: "brutale1000rr/greenMetal/brutale1000rr",
      mainColor: "rgba(199,227,0,1)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "FLUO YELLOW METALLIC AVIO GRAY",
    },
  ],
  properties: {
    cylinders: 4,
    hp: 208,
    engineMaxAt: "13.000",
    topSpeed: ">300",
    cc: 988,
    kg: "186",
    ratio: "13.4:1",
    scr: {
      large: "brutale1000rr/properties.jpg",
      medium: "brutale1000rr/properties-m.jpg",
      small: "brutale1000rr/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " FIT FOR THE STRIP",
    p:
      "The design draws on tight lines and volumes that are perfectly integrated between the front and rear end. This exquisite balance, a distinctive trait of the four-cylinder Brutale since the first iconic model that marked the relaunch of the Italian brand along with the F4, is now back with the new 1000 RR.",
    src: "brutale1000rr/design.png",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "brutale1000rr/engine.png",
    content:
      "Attention to quality clearly shows in the refined choice of materials, like titanium con rods and low-friction Asso piston rings. Every details counts when it comes to the performance of one of the most advanced inline-four-cylinder engines ever.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "Dedicated control unit",
      img: {
        original: "rush1000/items/electronics.jpg",
        large: "rush1000/items/electronics-l.jpg",
        medium: "rush1000/items/electronics-m.jpg",
        small: "rush1000/items/electronics-s.jpg",
      },
      description:
        "The Brutale 1000 RR features a full ride-by-wire multi map system with IMU inertial platform, which manages traction control with slip strategies (8 different settings and the option to deactivate it). Also featuring a Front Lift Control system with active and non-active options, it gives the rider entire freedom of action. The Brutale 1000 RR is equipped with a second generation TFT dashboard.",
    },
    {
      name: "Technology",
      title: "Semi-dry sump",
      img: {
        original: "rush1000/items/technology.jpg",
        large: "rush1000/items/technology-l.jpg",
        medium: "rush1000/items/technology-m.jpg",
        small: "rush1000/items/technology-s.jpg",
      },
      description:
        "The new splitter lubrication system, deriving from Mv Agusta’s racetrack experience, allows oil to be separated from moving mechanical parts. The semi-dry sump lubrication is capable of guaranteeing mechanical protection under extreme riding conditions such as sharp leans and wheelies, yet without compromises in terms of friction levels, that remain significantly low.",
    },
    {
      name: "Safety",
      title: "Safety",
      img: {
        original: "rush1000/items/safety.jpg",
        large: "rush1000/items/safety-l.jpg",
        medium: "rush1000/items/safety-m.jpg",
        small: "rush1000/items/safety-s.jpg",
      },
      description:
        "The Öhlins EC electronic regulation package for the fork, the steering damper and the shock absorber fixed to the single-sided swing arm provides optimum driving control in all road conditions.",
    },
  ],
};

export default function BodyBrutale1000RR() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <MotorPageHeader headerData={brutale1000rr_infor.header} />
      <PageName namePage={brutale1000rr_infor.namePage} />
      <Motor3d models={brutale1000rr_infor.Model3ds} />
      <MotorProperties properties={brutale1000rr_infor.properties} />
      <DesignTips designTips={brutale1000rr_infor.designTips} />
      <MvEngineMotor engineInf={brutale1000rr_infor.engineInf} />
      <MotorItem advantages={brutale1000rr_infor.advantages} />
      <OrderLayout modelName={brutale1000rr_infor.namePage} price={brutale1000rr_infor.header.price} />
    </>
  );
}
