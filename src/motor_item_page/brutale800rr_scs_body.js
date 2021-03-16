import React from "react";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";

const heroGradientStart = "#009FD1";
const heroGradientEnd = "#000000";
const brutale800rrscs_infor = {
  namePage: "Brutale 800 RR SCS",
  header: {
    price: "17.500",
    nameHeaderTitle: "brutale800rrscs/brutale-rr-scs.svg",
    bgHeaderParallax_Large: "brutale800rrscs/brutale-rr-scs-xl.png",
    bgHeaderParallax_Small: "brutale800rrscs/brutale-rr-scs-m.png",
    manifesto_Arr: ["SMART", "SHIFT.", "RAW", "POWER"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "MV Agusta’s technological excellence, reaffirmed by the new SCS 2.0 smart clutch system",
    titleSize: "auto 19%",
    reveredContent: false,
    heightContentTop: "22%",
  },
  Model3ds: [
    {
      link: "brutale800rrscs/original/800rr_scs",
      mainColor: "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #D42222 9.59%, #AA0F0F 80.9%)",
      nameOfColor: "SHOCK PEARL RED AVIO GREY",
    },
    {
      link: "brutale800rrscs/metalBlack/800rr_scs",
      mainColor: "linear-gradient(152.18deg, #424242 9.59%, #232323 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #C9C9C9 9.59%, #989898 80.9%)",
      nameOfColor: "CARBON BLACK METALLIC AVIO GRAY METALLIC",
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
      large: "brutale800rrscs/properties.jpg",
      medium: "brutale800rrscs/properties-m.jpg",
      small: "brutale800rrscs/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " PERFECTION AND BALANCE",
    p:
      "The design draws on tight lines and volumes that are perfectly integrated between the front and rear end. A design of extraordinary balance that’s always been the hallmark of the Brutale. The engine is nested in the traditional steel lattice chassis, complete with aluminium side plates, redesigned to further enhance driving experience.",
    src: "brutale800rrscs/design.jpg",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "brutale1000rr/engine.png",
    content:
      "The in-line three-cylinder engine of the Brutale RR SCS continues to stand out for its elasticity, its performance and its compact dimensions. With the help of the Smart Clutch System, it offers excellent performance and boasts an even more striking acceleration compared to bikes with a traditional clutch.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "An electronic revolution",
      img: {
        original: "brutale800rrscs/items/electronics.jpg",
        large: "brutale800rrscs/items/electronics-l.jpg",
        medium: "brutale800rrscs/items/electronics-m.jpg",
        small: "brutale800rrscs/items/electronics-s.jpg",
      },
      description:
        "The complete overhaul of the electronics with the introduction of the new inertial platform, developed with e-Novia exclusively for MV Agusta, has brought added usability to the Brutale’s exceptional performance. What’s more, the new 5.5” TFT instrumentation allows all parameters to be kept under control.",
    },
    {
      name: "Technology",
      title: "36 grams of lightness",
      img: {
        original: "brutale800rrscs/items/technology.jpg",
        large: "brutale800rrscs/items/technology-l.jpg",
        medium: "brutale800rrscs/items/technology-m.jpg",
        small: "brutale800rrscs/items/technology-s.jpg",
      },
      description:
        "The SCS system is incredibly easy to use, with up- and downshifts performed thanks to the foot lever and assisted by the two-way Quickshift. Indeed, the weight difference between the SCS system and a traditional clutch is just 36 grams: truly imperceptible.",
    },
    {
      name: "Safety",
      title: "Ease of braking and the new ABS",
      img: {
        original: "brutale800rrscs/items/safety.jpg",
        large: "brutale800rrscs/items/safety-l.jpg",
        medium: "brutale800rrscs/items/safety-m.jpg",
        small: "brutale800rrscs/items/safety-s.jpg",
      },
      description:
        "Power and ease of use: the most balanced combination of the two is provided by the Brembo system featured on the Brutale RR SCS, with four-piston radial calipers at the front and two 320 mm-diameter floating discs. The new Continental ABS comes with an extremely useful cornering function, guaranteeing safety even when turning.",
    },
  ],
};
export default function Brutale800RR_SCS_Body(){
    return (
      <>
        <NavDesktop />
        <Nav color="white" />
        <MotorPageHeader headerData={brutale800rrscs_infor.header} />
        <PageName namePage={brutale800rrscs_infor.namePage} />
        <Motor3d models={brutale800rrscs_infor.Model3ds} />
        <MotorProperties properties={brutale800rrscs_infor.properties} />
        <DesignTips designTips={brutale800rrscs_infor.designTips} />
        <MvEngineMotor engineInf={brutale800rrscs_infor.engineInf} />
        <MotorItem advantages={brutale800rrscs_infor.advantages} />
        <OrderLayout modelName={brutale800rrscs_infor.namePage} price={brutale800rrscs_infor.header.price} />
      </>
    );
}