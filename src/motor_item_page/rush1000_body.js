import React from "react";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import PageName from "../generalLayout/pageName";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";
const heroGradientStart = "#A4191B";
const heroGradientEnd = "#6B0B0D";
const rush1000infor = {
  namePage: "Rush 1000",
  header: {
    price: "34.000",
    nameHeaderTitle: "rush1000/sssssss.svg",
    bgHeaderParallax_Large: "rush1000/rush-1000-xl.png",
    bgHeaderParallax_Small: "rush1000/rush-1000-m.png",
    manifesto_Arr: ["THE", "BEAST", "MODE"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "The bewitching, ground-breaking hypernaked. The only production bike with radial valves and titanium connecting rods",
    reveredContent: false,
    heightContentTop: "26%",
    titleSize: "auto 20%",
  },
  Model3ds: [
    {
      link: "rush1000/original/rush1000",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "DARK METALLIC MATT GREY MAMBA RED MATT CARBON",
    },
    {
      link: "rush1000/racingKit/rush1000rc",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "Racing Kit",
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
      large: "rush1000/properties.jpg",
      medium: "rush1000/properties-m.jpg",
      small: "rush1000/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " FIT FOR THE STRIP",
    p:
      "The design choices highlight the uniqueness of the idea behind the Rush, a bike meant for those who are not afraid to stand-out of the crowd with out-of-the-ordinary details, such as she lenticular rear-wheel, typical of acceleration races.",
    src: "rush1000/design.jpg",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "rush1000/engine.png",
    content:
      "The inline-four-cylinder engine of the Brutale 1000RR, the result of an accurate development process, offers record power of 208 hp (153 kW) at 13000 rpm, that further increases to 212 hp (156 kW) in racetrack configuration. Torque stands at 116.5 Nm. The combustion chamber has been completely redesigned, drawing on Formula 1 technology",
  },
  advantages: [
    {
      name: "Electronic",
      title: "Traction control for lighting launches",
      img: {
        original: "rush1000/items/electronics.jpg",
        large: "rush1000/items/electronics-l.jpg",
        medium: "rush1000/items/electronics-m.jpg",
        small: "rush1000/items/electronics-s.jpg",
      },
      description:
        "The evolution of the electronics compartment aims at making the Rush 1000 the easiest possible to drive despite its exceptional performance. Thus the extreme care in fine-tuning the electronic management of the engine. The 8-level traction control is particularly useful on a model boasting rocket-like starts, as is the anti-wheelie system and the EAS 2.1 Up & Down for clutch-free changes.",
    },
    {
      name: "Technology",
      title: "Brutal Inspiration",
      img: {
        original: "rush1000/items/technology.jpg",
        large: "rush1000/items/technology-l.jpg",
        medium: "rush1000/items/technology-m.jpg",
        small: "rush1000/items/technology-s.jpg",
      },
      description:
        'All MV Agusta technology is concentrated in this Rush 1000, which boasts the engine, transmission and chassis of the extremely powerful Brutale 1000 RR. Every technical detail has been adapted to the irreverent vocation of this "strip" bike, to obtain an even more exciting performance. Starting with titanium connecting rods, which reduce engine loads and inertia.',
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
        "Brembo Stylema callipers linked to Bosch 9 Plus Race ABS with RLM (Rear wheel Lift Mitigation) constitute the ideal combination to manage the exuberance of the Rush 1000. Born to impress, it exploits the electronically adjustable Öhlins EC suspension units to further enhance driving control.",
    },
  ],
};
export default function Rush1000() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={rush1000infor.namePage} />
      <MotorPageHeader headerData={rush1000infor.header} />
      <Motor3d models={rush1000infor.Model3ds} />
      <MotorProperties properties={rush1000infor.properties} />
      <DesignTips designTips={rush1000infor.designTips} />
      <MvEngineMotor engineInf={rush1000infor.engineInf} />
      <MotorItem advantages={rush1000infor.advantages} />
      <OrderLayout modelName={rush1000infor.namePage} price={rush1000infor.header.price}/>
    </>
  );
}
