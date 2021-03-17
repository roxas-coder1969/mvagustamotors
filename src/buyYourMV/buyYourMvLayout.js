import React from 'react';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import PageName from '../generalLayout/pageName';
import BuyYourMvHeader from './component/buyYourMvHeader';


export default function BuyYourMvLayout(){
    return (
      <>
        <div
          className="nav-pc-homepage nav-pc-homepage-of-buy-your-mv"
          style={{
            width: "100vw",
            background: "linear-gradient(180deg,#1D1D1D 0%,#0F0F0F 100%)",
          }}
        >
          <div className="area-banner">
            <picture>
              <img
                className="img-banner img-banner-phone"
                media="(max-width: 991px)"
                src="./img/buyYourMv/background-m.png"
                alt=""
              ></img>
              <img
                className="img-banner img-banner-wd"
                src="./img/buyYourMv/background-xl.webp"
                alt=""
              ></img>
            </picture>
            <div className="title-header">
              <h1>
                <strong> BUY YOUR </strong> MV{" "}
              </h1>
            </div>
          </div>
        </div>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage="Buy your Mv Product" />
        <BuyYourMvHeader />
      </>
    );
}

