import React from "react";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";
import PageName from "../generalLayout/pageName";
import AlpineDiscover from "../layoutSpAlpine/alpineDiscover";
import AlpineMotion from "../layoutSpAlpine/alpineMotion";
const heroGradientStart = "#00213D";
const heroGradientEnd = "#020308";
const spAlpine_infor = {
  namePage: "Superveloce Alpine",
  colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
  header: {
    price: "36.300",
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    nameHeaderTitle: "superveloceAlpine/superveloce-alpine.svg",
    bgHeaderParallax_Large: "superveloceAlpine/superveloce-alpine-xl.png",
    bgHeaderParallax_Small: "superveloceAlpine/superveloce-alpine-m.png",
    manifesto_Arr: ["MOTOR", "SPORT'S", "BLUE", "MODE"],
    contentHeaderContent:
      "A luxury, high-performing limited edition Superveloce in Alpine's signature blue livery.",
    reveredContent: false,
    heightContentTop: "15.5%",
    titleSize: "auto 23%",
  },
  properties: {
    cylinders: 3,
    hp: 147,
    engineMaxAt: "13.000",
    topSpeed: "240",
    cc: 798,
    kg: "173",
    ratio: "13.3:1",
    scr: {
      large: "superveloceAlpine/properties.jpg",
      medium: "superveloceAlpine/properties-m.jpg",
      small: "superveloceAlpine/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " FRENCH ELEGANCE MUSCLE",
    p:
      "When two motorsport giants such as Alpine and MV Agusta come together, the result can only be stunning in terms of design and technology. The Superveloce Alpine represents the quintessence of the two brands’ souls and character in an incredibly beautiful and richly detailed limited edition.",
    src: "superveloceAlpine/design.jpg",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "3-engine.png",
    content:
      "The in-line three-cylinder engine is directly derived from that of the F3 800. Compact in size, it excels in performance and elasticity. With 147 hp at 13000 rpm it guarantees to supply unforgettable riding emotions on any road, including, of course, track.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "Control is in your hands",
      img: {
        original: "superveloceAlpine/items/electronics.jpg",
        large: "superveloceAlpine/items/electronics-l.jpg",
        medium: "superveloceAlpine/items/electronics-m.jpg",
        small: "superveloceAlpine/items/electronics-s.jpg",
      },
      description:
        "Four dedicated engine maps, one of which fully customisable, to adapt to all riding situations; Launch control; Cruise control; 5” TFT dashboard colour display; MVRide App for navigation mirroring, engine-control and rider aids setup; Bluetooth; GPS; Mobisat tracker.",
    },
    {
      name: "Technology",
      title: "Into the future",
      img: {
        original: "superveloceAlpine/items/technology.jpg",
        large: "superveloceAlpine/items/technology-l.jpg",
        medium: "superveloceAlpine/items/technology-m.jpg",
        small: "superveloceAlpine/items/technology-s.jpg",
      },
      description:
        "The racing legacy of MV Agusta and Alpine permeates every single detail of the Superveloce Alpine. But beyond its design inspired by one of the most iconic rally cars in the history of motorsport, it reveals the most modern technology and leading-edge electronics, and a host of high-end details and exclusive finishings.",
    },
    {
      name: "Safety",
      title: "Top notch brake system",
      img: {
        original: "superveloceAlpine/items/safety.jpg",
        large: "superveloceAlpine/items/safety-l.jpg",
        medium: "superveloceAlpine/items/safety-m.jpg",
        small: "superveloceAlpine/items/safety-s.jpg",
      },
      description:
        "The brake system features radial four-piston calipers and large-diameter discs. The aim is to offer state-of-the-art brake power and, most of all, confidence-inspiring control, which is fundamental in all circumstances.",
    },
  ],
};

export default function SuperveloceAlpine() {
  // window.addEventListener("scroll", () => {
  //   ScrollNavFunction();
  //   NavWhiteCompact();
  // });
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={spAlpine_infor.namePage} />
      <MotorPageHeader headerData={spAlpine_infor.header} />
      <AlpineMotion />
      <MotorProperties properties={spAlpine_infor.properties} />
      <AlpineDiscover />
      <DesignTips designTips={spAlpine_infor.designTips} />
      <MvEngineMotor engineInf={spAlpine_infor.engineInf} />
      <MotorItem advantages={spAlpine_infor.advantages} />
      <OrderLayout modelName={spAlpine_infor.namePage} price={spAlpine_infor.header.price}></OrderLayout>
    </>
  );
}
