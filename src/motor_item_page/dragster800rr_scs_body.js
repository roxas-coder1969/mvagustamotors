import React from "react";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";
import PageName from "../generalLayout/pageName";

const heroGradientStart = "#777777";
const heroGradientEnd = "#161616";
const dragster800rr_scs_infor = {
  namePage: "Dragster 800 RR SCS",
  colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
  header: {
    price: "20.000",
    nameHeaderTitle: "dragster800rrscs/dragster-rr-scs.svg",
    bgHeaderParallax_Large: "dragster800rrscs/dragster-rr-scs-xl.png",
    bgHeaderParallax_Small: "dragster800rrscs/dragster-rr-scs-m.png",
    manifesto_Arr: ["THE", "SMART", "REBEL"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 100%)`,
    contentHeaderContent:
      "Exuberance and character. Ready to burn the tarmac without breaking a sweat, thanks to the new smart electronic gearbox.",
    reveredContent: false,
    heightContentTop: "26%",
    titleSize: "auto 12%",
  },
  Model3ds: [
    {
      link: "dragster800rrscs/metalGrey/dragster800rr_scs",
      mainColor: "linear-gradient(152.18deg, #4C4C4C 9.59%, #232323 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #606060 9.59%, #363636 80.9%)",
      nameOfColor: "MATT MAGNUM AVIO GREY MATT METALLIC DARK GREY",
    },
    {
      link: "dragster800rrscs/metalBlack/dragster800rr_scs",
      mainColor: "linear-gradient(152.18deg, #C9C9C9 9.59%, #989898 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #4C4C4C 9.59%, #272727 80.9%)",
      nameOfColor: "MATT MAGNUM AVIO GREY MATT METALLIC DARK GREY",
    },
  ],
  properties: {
    cylinders: 3,
    hp: 140,
    engineMaxAt: "12.300",
    topSpeed: "244",
    cc: 798,
    kg: "168",
    ratio: "13.3:1",
    scr: {
      large: "dragster800rrscs/properties.jpg",
      medium: "dragster800rrscs/properties-m.jpg",
      small: "dragster800rrscs/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " INSTANT CLASSIC",
    p:
      "Inimitable, with a unique personality. The curves of the fuel tank and headlight, the bobbed tail and the elegant spoke wheels superbly frame the three-cylinder engine at the heart of the Dragster. Ready for action, bursting with exuberance and power.",
    src: "dragster800rrscs/design.png",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "dragster800rrscs/engine.png",
    content:
      "Always ready to react to the slightest pressure on the throttle, the 140 HP and 87 Nm three-cylinder engine on the Dragster RR SCS can count on electronic management that’s constantly evolving. The extremely sensitive response is combined with an advanced Smart Clutch System to allow this sophisticated engine to reach its full potential.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "Ultimate efficiency",
      img: {
        original: "dragster800rrscs/items/electronics.jpg",
        large: "dragster800rrscs/items/electronics-l.jpg",
        medium: "dragster800rrscs/items/electronics-m.jpg",
        small: "dragster800rrscs/items/electronics-s.jpg",
      },
      description:
        "The SCS 2.0 system allows a perfect match between the clutch action and the delivery curve of the three-cylinder engine. The support of highly sophisticated electronics has allowed MV engineers to unlock the secret to beating traditional-clutch models in acceleration performance.",
    },
    {
      name: "Technology",
      title: "Fluid, more intuitive ride",
      img: {
        original: "dragster800rrscs/items/technology.jpg",
        large: "dragster800rrscs/items/technology-l.jpg",
        medium: "dragster800rrscs/items/technology-m.jpg",
        small: "dragster800rrscs/items/technology-s.jpg",
      },
      description:
        "The SCS 2.0 system doesn’t really change the way the rider interacts with the motorcycle: the clutch control, shift and gears are still just where you’d expect to find them, but with the bonus option of simply deciding not to use the clutch. For extreme functionality, without sacrificing anything.",
    },
    {
      name: "Safety",
      title: "Power and control",
      img: {
        original: "dragster800rrscs/items/safety.jpg",
        large: "dragster800rrscs/items/safety-l.jpg",
        medium: "dragster800rrscs/items/safety-m.jpg",
        small: "dragster800rrscs/items/safety-s.jpg",
      },
      description:
        "A braking system worthy of the name and performance of the Dragster. Powerful and scalable, with two 320 mm-diameter floating discs and four-piston radial callipers, plus the assistance of the advanced Continental ABS with cornering function.",
    },
  ],
};
export default function Dragster800RR_SCS() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={dragster800rr_scs_infor.namePage} />
      <MotorPageHeader headerData={dragster800rr_scs_infor.header} />
      <Motor3d models={dragster800rr_scs_infor.Model3ds} />
      <MotorProperties properties={dragster800rr_scs_infor.properties} />
      <DesignTips designTips={dragster800rr_scs_infor.designTips} />
      <MvEngineMotor engineInf={dragster800rr_scs_infor.engineInf} />
      <MotorItem advantages={dragster800rr_scs_infor.advantages} />
      <OrderLayout modelName={dragster800rr_scs_infor.namePage} price={dragster800rr_scs_infor.header.price}/>
    </>
  );
}
