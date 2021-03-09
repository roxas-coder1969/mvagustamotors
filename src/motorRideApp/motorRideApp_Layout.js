import React from 'react';
import ReactDOM from 'react-dom';
import { BodyContainer } from './component/bodyContainer';
import { BodyContainer2 } from './component/BodyContainer-2';
import { BodyContainer0 } from './component/BodyContainer-0';
import { BodyContainer4 } from './component/BodyContainer-4';
import NavDesktop from '../generalLayout/navDesk';
import Nav from '../generalLayout/nav';
import PageName from '../generalLayout/pageName';


const imgData = [
  {
    name: "BRUTALE 1000 SERIE ORO",
    imgSrc: "brutale_pr.png",
  },
  {
    name: "BRUTALE 1000 RR",
    imgSrc: "brutale_1000.png",
  },
  {
    name: "SUPERVELOCE 800 SERIE ORO",
    imgSrc: "supervelocer_pr.png",
  },
  {
    name: "SUPERVELOCE 800",
    imgSrc: "superveloce_pr.png",
  },
];
export default function MotorRideAppLayout() {

    return (
      <>
          <NavDesktop colorBlack={true}/>
          <Nav color="white" />
          <PageName namePage="Motor Ride App" />
          <BodyContainer0 />
          <BodyContainer />
          <BodyContainer2 imgSrc={imgData} />
          <BodyContainer4 />
      </>
    );
}
