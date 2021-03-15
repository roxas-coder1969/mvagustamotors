import React from 'react';
import DesignTips from '../generalLayout/motorPage/designTips/designTips';
import Motor3d from '../generalLayout/motorPage/model3d/motor3d';
import MotorItem from '../generalLayout/motorPage/motorItems/motorItems';
import MotorPageHeader from '../generalLayout/motorPage/motorHeader/motorPageHeader';
import MotorProperties from '../generalLayout/motorPage/motorProperties/motorProperties';
import MvEngineMotor from '../generalLayout/motorPage/motorEngine/mvEngineMotor';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import OrderLayout from '../generalLayout/motorPage/orderLayout/orderLayout';
import PageName from '../generalLayout/pageName';
const heroGradientStart = "#DD0707";
const heroGradientEnd = "#B11C1C";
const f3_800_infor = {
  namePage: "F3 800",
  header: {
    price: "17.490",
    nameHeaderTitle: "f3-800/f3-800.svg",
    bgHeaderParallax_Large: "f3-800/f3-800-xl.png",
    bgHeaderParallax_Small: "f3-800/f3-800-m.png",
    manifesto_Arr: ["STREET", "LEGAL", "SUPER", "SPORT"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "The return of the racing star 3-cylinder engine and the first supersport with a counter-rotating crankshaft",
    titleSize: "auto 16%",
    reveredContent: true,
    heightContentTop: "22%",
  },
  Model3ds: [
    {
      link: "f3-800/original/800",
      mainColor: "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      secondaryColor:
        "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      nameOfColor: "AGO RED AGO SILVER",
    },
  ],
  properties: {
    cylinders: 3,
    hp: 148,
    engineMaxAt: "13.000",
    topSpeed: "240",
    cc: 7998,
    kg: "173",
    ratio: "13.3:1",
    scr: {
      large: "f3-800/properties.jpg",
      medium: "f3-800/properties-m.jpg",
      small: "f3-800/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " FORMED BY SPEED",
    p:
      "Every detail of the F3 800 is designed with a sole objective: making it faster. Form follows function, say the masters of design, and all with the unmistakable style of MV Agusta.",
    src: "f3-800/design.jpg",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "3-engine.png",
    content:
      "Thanks to the increased stroke of the crankshaft, the F3 800 delivers 148 hp at 13.000 rpm (+20hp with respect to F3 675), together with a maximum torque of 88 Nm at 10.600 rpm. More power, more torque (+17,5 Nm), more adrenaline!",
  },
  advantages: [
    {
      name: "Electronic",
      title: "Advanced electronics",
      img: {
        original: "f3-800/items/electronics.jpg",
        large: "f3-800/items/electronics-l.jpg",
        medium: "f3-800/items/electronics-m.jpg",
        small: "f3-800/items/electronics-s.jpg",
      },
      description:
        "The F3 800 features the latest evolution of the MVICS system with multi-map Full Ride by Wire, 8-level traction control and EAS 2.0 up down electronic gearbox mated to a hydraulic slipper clutch. The electronic injection system has two injectors per cylinder with record 50 mm diameter throttle bodies.",
    },
    {
      name: "Technology",
      title: "LONGER STROKE",
      img: {
        original: "f3-800/items/technology.jpg",
        large: "f3-800/items/technology-l.jpg",
        medium: "f3-800/items/technology-m.jpg",
        small: "f3-800/items/technology-s.jpg",
      },
      description:
        "Bore on the F3 800 is the same 79.0 mm, but the stroke increases from 45,9 mm (effective cubic capacity of 675cc) to 54,3 mm (effective cubic capacity of 798 cc), with the rev limiter intervening at 13.500 rpm. Higher-flow fuel injectors compared to the F3 675 ensure additional power, whilst it features the same counter-rotating crankshaft.",
    },
    {
      name: "Safety",
      title: "Safety",
      img: {
        original: "f3-800/items/safety.jpg",
        large: "f3-800/items/safety-l.jpg",
        medium: "f3-800/items/safety-m.jpg",
        small: "f3-800/items/safety-s.jpg",
      },
      description:
        "When all you have to think about is riding, fun and pleasure are at their top, especially since safety is ensured by the two-channel Bosch 9 PLUS ABS system with Race Mode. With Rear Wheel Lift-up Mitigation, the system controls the pressure applied on the front brake to avoid involuntary rear wheel lift-up.",
    },
  ],
};
export default function F3_800_Body(){
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <MotorPageHeader headerData={f3_800_infor.header} />
        <PageName namePage={f3_800_infor.namePage} />
        <Motor3d models={f3_800_infor.Model3ds} />
        <MotorProperties properties={f3_800_infor.properties} />
        <DesignTips designTips={f3_800_infor.designTips} />
        <MvEngineMotor engineInf={f3_800_infor.engineInf} />
        <MotorItem advantages={f3_800_infor.advantages} />
        <OrderLayout modelName={f3_800_infor.namePage} price={f3_800_infor.header.price} />
      </>
    );
}