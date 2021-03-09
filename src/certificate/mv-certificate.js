import React from 'react';
import {CertificateHeader} from './mv-certificate-header';
import {CertificateInfor} from './mv-certificate-info';
import { MVCertifiedCenter } from './mvCertifiedCenter';
import {ScrollNavFunction} from '../generalFunctionForOnScroll/ScrollEventFor_MotorPage';
import {NavWhiteCompact} from '../generalFunctionForOnScroll/ScrollEventFor_Homepage'
import {data} from "./mvCertifiedData";
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';


export function Container(){
    window.addEventListener("scroll", () => {
        ScrollNavFunction();
        NavWhiteCompact();
      });
    return(
        <>
        <Nav color ="white"> </Nav>
        <NavDesktop></NavDesktop>
        <div className="mv-certifed">
            <CertificateHeader />
            <MVCertifiedCenter dulieu={data}/>
            <CertificateInfor />
        </div>
        </>
    )
}