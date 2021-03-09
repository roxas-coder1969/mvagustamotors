import React from 'react';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import PageName from '../generalLayout/pageName';

export default function WarrantyLayout(){
    return (
      <>
        <div
          className="nav-pc-homepage"
          style={{
            height: "84px",
            width: "100vw",
            background: "linear-gradient(180deg,#1D1D1D 0%,#0F0F0F 100%)",
          }}
        ></div>
        <NavDesktop />
        <Nav color="white" />
        <PageName namePage="Buy your Mv Product" />
      </>
    );
}