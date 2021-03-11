import React from 'react';
import NavDesktop from '../generalLayout/navDesk';
import Nav from '../generalLayout/nav';
import PageName from '../generalLayout/pageName';
import { MotorRideAppPhone } from './component/motorRideAppPhone';
import { MobileRideAppContainer } from './component/mobileRideApp';
import { MotorRideAppHistoryContainer } from './component/motorRideAppHistory';
import { MotorRideAppImagesContainer } from './component/motorRideAppImages';
import { MotorRideDownloadContainer } from './component/motorRideDownload';


const imgData = [
  {
    name: "BRUTALE 1000 SERIE ORO",
    imgSrc: "main.png",
  },
  {
    name: "BRUTALE 1000 RR",
    imgSrc: "main (1).png",
  },
  {
    name: "SUPERVELOCE 800 SERIE ORO",
    imgSrc: "main (2).png",
  },
  {
    name: "SUPERVELOCE 800",
    imgSrc: "main (3).png",
  },
];

const imgPhoneData = {
  
  imgSrc0: "app-preview-2.png",
  
  imgSrc1: "itineraries-xl.png",
  
  imgSrc2: "trips-m.png"
  
};

export default function MotorRideAppLayout() {

    return (
      <>
          <NavDesktop colorBlack={true}/>
          <Nav color="white" />
          <PageName namePage="Motor Ride App" />
          <MobileRideAppContainer/>
          <MotorRideAppHistoryContainer/>
          <MotorRideAppImagesContainer src={imgData}/>
          <MotorRideAppPhone imgPhoneSrc={imgPhoneData}/>
          <MotorRideDownloadContainer/>
      </>
    );
}
