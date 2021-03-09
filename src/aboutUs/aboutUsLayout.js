import React from "react";
import { AboutUsMission } from "./component/aboutUsMission";
import { AboutUsStand } from "./component/aboutUsStand";
import { AboutUsPerfection } from "./component/aboutUsPerfection";
import { AboutUsLegend } from "./component/aboutUsLegend";
import { AboutUsTimeless } from "./component/aboutUsTimeless";
import Nav from "../generalLayout/nav";
import NavDesktop from "../generalLayout/navDesk";
import PageName from "../generalLayout/pageName";
import { AboutUsBanner } from "./component/aboutUsBanner";
export default function AboutUsLayout() {
  return (
    <>
      <NavDesktop />
      <Nav color="white" />
      <PageName namePage="About us" />
      <AboutUsBanner />
      <AboutUsStand />
      <AboutUsMission />
      <AboutUsPerfection />
      <AboutUsLegend />
      <AboutUsTimeless />
    </>
  );
}
