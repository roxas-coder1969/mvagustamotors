import React from "react";
import SlideImgHomepage from "./slideImgHomePage";
import {
  NavWhiteCompact,
  scrollFunction,
} from "../generalFunctionForOnScroll/ScrollEventFor_Homepage";
import PageName from "../generalLayout/pageName";
import MvTagType, { MvTagMobile } from "../generalLayout/mvTagType";
import MVSpecialPart from "../generalLayout/mvSpecialPart";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import { MvAssistant } from "./mvAssistant";
import { AboutUs } from "./aboutUsComponent";
const namePage = "MV Agusta Homepage";

export function BodyHomepage() {
  window.addEventListener("scroll", () => {
    NavWhiteCompact();
  });
  return (
    <>
      <div
        className="nav-pc-homepage"
        style={{
          height: "82px",
          width: "100vw",
          background: "#f1f1f1",
        }}
      ></div>
      <NavDesktop colorBlack={true} />
      <Nav />
      <PageName namePage={namePage} />
      <div className="mv-bg" id="main-bg">
        <SlideImgHomepage />
      </div>
      <div style={{ height: "10vh" }}></div>
      <div className="mv-about-us" id="mv-about-us">
        <AboutUs />
      </div>
      <MvTagType />
      <MvTagMobile />
      <MvAssistant />
      <MVSpecialPart />
    </>
  );
}
