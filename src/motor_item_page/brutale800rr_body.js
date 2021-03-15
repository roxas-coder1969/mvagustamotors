import React from 'react';
import DesignTips from '../generalLayout/motorPage/designTips/designTips';
import Motor3d from '../generalLayout/motorPage/model3d/motor3d';
import MvEngineMotor from '../generalLayout/motorPage/motorEngine/mvEngineMotor';
import MotorPageHeader from '../generalLayout/motorPage/motorHeader/motorPageHeader';
import MotorItem from '../generalLayout/motorPage/motorItems/motorItems';
import MotorProperties from '../generalLayout/motorPage/motorProperties/motorProperties';
import OrderLayout from '../generalLayout/motorPage/orderLayout/orderLayout';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import PageName from '../generalLayout/pageName';

const heroGradientStart = "#606060";
const heroGradientEnd = "#262626";
const brutale800rr_infor = {
  namePage: "Brutale 800 RR",
  header: {
    price: "17.000",
    nameHeaderTitle: "brutale800rr/brutale-rr.svg",
    bgHeaderParallax_Large: "brutale800rr/brutale-rr-xl.png",
    bgHeaderParallax_Small: "brutale800rr/brutale-rr-m.png",
    manifesto_Arr: ["POWER.", "MORE", "IS", "BETTER"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "The latest milestone on a journey that began with the original Brutale, sharing the looks of the market’s most comprehensive sports naked.",
    titleSize: "auto 14%",
    reveredContent: false,
    heightContentTop: "21.5%",
  },
  model3ds: [
    {
      link: "brutale800rr/original/800rr",
      mainColor: "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #C9C9C9 9.59%, #989898 80.9%)",
      nameOfColor: "CARBON BLACK METALLIC AVIO GRAY METALLIC",
    },
    {
      link: "brutale800rr/redMetal/800rr",
      mainColor: "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      nameOfColor: "SHOCK PEARL RED AVIO GREY",
    },
  ],
  properties: {
    cylinders: 3,
    hp: 140,
    engineMaxAt: "12.300",
    topSpeed: "244",
    cc: 798,
    kg: "175",
    ratio: "13.3:1",
    scr: {
      large: "brutale800rr/properties.jpg",
      medium: "brutale800rr/properties-m.jpg",
      small: "brutale800rr/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " INSTANT CLASSIC",
    p:
      "Designed for top performance, with improvements to the chassis, electronics and engine. A dual seat with a new improved-comfort design and a simple, lightweight sub-frame represent the latest technical innovations, for an even better riding experience. Not to mention a design that has always refused to compromise.",
    src: "brutale800rr/design.jpg",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "3-engine.png",
    content:
      "RR means power and torque: with 140 HP and 86 Nm, fun is guaranteed. Improvements to distribution have also allowed a reduction in friction. Also new is the increased-efficiency exhaust system, while the injectors have been redesigned to guarantee better fuel atomisation.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "LATEST GENERATION ELECTRONICS",
      img: {
        original: "brutale800rr/items/electronics.jpg",
        large: "brutale800rr/items/electronics-l.jpg",
        medium: "brutale800rr/items/electronics-m.jpg",
        small: "brutale800rr/items/electronics-s.jpg",
      },
      description:
        "Even excellence can be improved upon: with this in mind, the frame features new side plates which increase lateral and longitudinal rigidity. The new rear linkage boosts progressiveness and works in harmony with the re-calibrated fork. Efficiency, comfort and a sporting thrill are the results of constant evolution.",
    },
    {
      name: "Technology",
      title: "CHASSIS ARCHITECTURE AT ITS BEST",
      img: {
        original: "brutale800rr/items/technology.jpg",
        large: "brutale800rr/items/technology-l.jpg",
        medium: "brutale800rr/items/technology-m.jpg",
        small: "brutale800rr/items/technology-s.jpg",
      },
      description:
        "The new splitter lubrication system, deriving from Mv Agusta’s racetrack experience, allows oil to be separated from moving mechanical parts. The semi-dry sump lubrication is capable of guaranteeing mechanical protection under extreme riding conditions such as sharp leans and wheelies, yet without compromises in terms of friction levels, that remain significantly low.",
    },
    {
      name: "Safety",
      title: "TECHNOLOGY MEANS SAFETY",
      img: {
        original: "brutale800rr/items/safety.jpg",
        large: "brutale800rr/items/safety-l.jpg",
        medium: "brutale800rr/items/safety-m.jpg",
        small: "brutale800rr/items/safety-s.jpg",
      },
      description:
        "The new Continental ABS MK100 with RLM means that even the sharpest and most sudden weight transfers can be managed safely. It includes a cornering function which enables safe breaking even on corners, as well as interfacing with the inertial platform designed specifically for the Brutale range.",
    },
  ],
};
export default function Brutale800RRBody(){
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage={brutale800rr_infor.namePage} />
        <MotorPageHeader headerData={brutale800rr_infor.header} />
        <Motor3d models={brutale800rr_infor.model3ds} />
        <MotorProperties properties={brutale800rr_infor.properties} />
        <DesignTips designTips={brutale800rr_infor.designTips} />
        <MvEngineMotor engineInf={brutale800rr_infor.engineInf} />
        <MotorItem advantages={brutale800rr_infor.advantages} />
        <OrderLayout modelName={brutale800rr_infor.namePage} price={brutale800rr_infor.header.price} />
      </>
    );
}