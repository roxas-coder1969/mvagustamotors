import React from "react";
import Motor3d from "../generalLayout/motorPage/model3d/motor3d";
import PageName from "../generalLayout/pageName";
import MotorPageHeader from "../generalLayout/motorPage/motorHeader/motorPageHeader";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import DesignTips from "../generalLayout/motorPage/designTips/designTips";
import MotorProperties from "../generalLayout/motorPage/motorProperties/motorProperties";
import MotorItem from "../generalLayout/motorPage/motorItems/motorItems";
import MvEngineMotor from "../generalLayout/motorPage/motorEngine/mvEngineMotor";
import OrderLayout from "../generalLayout/motorPage/orderLayout/orderLayout";
const heroGradientStart = "#294386";
const heroGradientEnd = "#161616";
const dragster800rr_infor = {
  namePage: "Dragster 800 RR",
  colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 95%)`,
  header: {
    price: "19.500",
    nameHeaderTitle: "dragster800rr2021/dragster-rr.svg",
    bgHeaderParallax_Large: "dragster800rr2021/dragster-rr-xl.png",
    bgHeaderParallax_Small: "dragster800rr2021/dragster-rr-m.png",
    manifesto_Arr: ["WE", "LOVE", "BEING", "REBELS"],
    colorBg: `linear-gradient(90deg,${heroGradientStart} 0%,${heroGradientEnd} 95%)`,
    contentHeaderContent:
      "Aggressive. Imposing. An uncompromising street fighter with an extraordinary 3-cylinder engine and top components.",
    titleSize: "auto 15%",
    reveredContent: false,
    heightContentTop: "23.5%",
  },

  Model3ds: [
    {
      link: "dragster800rr2021/blmt/dragster800rr",
      mainColor: "linear-gradient(152.18deg, #4C4C4C 9.59%, #232323 79.93%)",
      secondaryColor:
        "linear-gradient(152.18deg, #606060 9.59%, #363636 80.9%)",
      nameOfColor: "MATT MAGNUM AVIO GREY MATT METALLIC DARK GREY",
    },
    {
      link: "dragster800rr2021/metalYellow/dragster800rr",
      mainColor: "rgba(194,162,47,1)",
      secondaryColor:
        "linear-gradient(152.18deg, #4C4C4C 9.59%, #272727 80.9%)",
      nameOfColor: "LIMITED MATT MAGNUM MATT METALLIC DARK YELLOW",
    },
  ],
  properties: {
    cylinders: 4,
    hp: 208,
    engineMaxAt: "13.000",
    topSpeed: "244",
    cc: 988,
    kg: "186",
    ratio: "13.4:1",
    scr: {
      large: "dragster800rr2021/properties.jpg",
      medium: "dragster800rr2021/properties-m.jpg",
      small: "dragster800rr2021/properties-s.jpg",
    },
  },
  designTips: {
    span: "DESIGN.",
    strong: " INSTANT CLASSIC",
    p:
      "With the looks of a street fighter, reflecting the powerful three-piston heart, the Dragster RR is a raw blend of technology, design and emotions. No other motorcycle better embodies this concept and the vision inspiring it.",
    src: "dragster800rr2021/design.png",
  },
  engineInf: {
    title: {
      top: "FEEL",
      bottom: "THE POWER OF SOUND",
    },
    src: "dragster800rr2021/engine.png",
    content:
      "The three-cylinder engine, now Euro 5 approved, has been perfected through modifications aimed at increasing its efficiency in terms of performance and reliability. MV engineers have been able to reduce internal friction even further thanks to the DLC coating on the new tappets and the different materials used for the valve guides. Rounding off the improvements is the complete overhaul of the exhaust system.",
  },
  advantages: [
    {
      name: "Electronic",
      title: "UNRIVALLED ELECTRONICS",
      img: {
        original: "dragster800rr2021/items/electronics.jpg",
        large: "dragster800rr2021/items/electronics-l.jpg",
        medium: "dragster800rr2021/items/electronics-m.jpg",
        small: "dragster800rr2021/items/electronics-s.jpg",
      },
      description:
        "From the dashboard to the ABS, taking in the controls and the firmware of the control unit: the electronics on the new Dragster RR have taken a huge step forward in quality, thanks in part to the arrival of the new IMU inertial platform, which reads the spatial positioning of the motorcycle and enables traction controls to be managed with great sensitivity based on the lean angle.",
    },
    {
      name: "Technology",
      title: "TECHNOLOGY AND THRILLS",
      img: {
        original: "dragster800rr2021/items/technology.jpg",
        large: "dragster800rr2021/items/technology-l.jpg",
        medium: "dragster800rr2021/items/technology-m.jpg",
        small: "dragster800rr2021/items/technology-s.jpg",
      },
      description:
        "The SCS 2.0 system doesn’t really change the way the rider interacts with the motorcycle: the clutch control, shift and gears are still just where you’d expect to find them, but with the bonus option of simply deciding not to use the clutch. For extreme functionality, without sacrificing anything.The weight distribution, the refined chassis and suspension as well as the Dragster's unique character are the main characteristics of a machine that was created for the most demanding riding enthusiasts.",
    },
    {
      name: "Safety",
      title: "Increased riding pleasure",
      img: {
        original: "dragster800rr2021/items/safety.jpg",
        large: "dragster800rr2021/items/safety-l.jpg",
        medium: "dragster800rr2021/items/safety-m.jpg",
        small: "dragster800rr2021/items/safety-s.jpg",
      },
      description:
        "When you can concentrate purely on riding, you automatically increase the fun. And when safety is covered by a Continental ABS system with cornering function and Rear Wheel Lift-up Mitigation, there’s nothing to worry about. The system mitigates the pressure exerted on the front brake to avoid rear-wheel lift.",
    },
  ],
};
export default function BodyDragster800RR() {
  // window.addEventListener("scroll", () => {
  //   ScrollNavFunction();
  //   NavWhiteCompact();
  // });
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage={dragster800rr_infor.namePage}></PageName>
      <MotorPageHeader
        headerData= {dragster800rr_infor.header}
      />
      <Motor3d models={dragster800rr_infor.Model3ds} />
      <MotorProperties properties={dragster800rr_infor.properties} />
      <DesignTips designTips={dragster800rr_infor.designTips} />
      <MvEngineMotor engineInf={dragster800rr_infor.engineInf} />
      <MotorItem advantages={dragster800rr_infor.advantages} />
      <OrderLayout modelName={dragster800rr_infor.namePage} price={dragster800rr_infor.header.price}/>
    </>
  );
}
