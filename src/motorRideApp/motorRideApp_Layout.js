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
    name: "Brutale 1000 RR",
    imgSrc: "review0.png",
  },
  {
    name: "Dragster 800 rr",
    imgSrc: "review1.png",
  },
  {
    name: "F800",
    imgSrc: "review2.png",
  },
  {
    name: "SUPERVELOCE 800",
    imgSrc: "review3.png",
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
          <Nav color="black" />
          <PageName namePage="Motor Ride App" />
          <MobileRideAppContainer/>
          <MotorRideAppHistoryContainer/>
          <MotorRideAppImagesContainer src={imgData}/>
          <MotorRideAppPhone imgPhoneSrc={imgPhoneData}/>
          <MotorRideDownloadContainer/>
      </>
    );
}
