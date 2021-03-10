import React from 'react'
import background from "./img/mvBackground.jpg";
import backgroundM from "./img/banner-m.jpg";
import backgroundS from "./img/banner-s.jpg";
export function CertificateHeader() {
    return (
        <section className="mv-header-certificate" >
            <div className="mv-certificate-header">
                <h1>
                        MV AGUSTA
                     <br />
                    CERTIFIED
                </h1>
            </div>
            <picture className="mv-background">
                <source media="(max-width: 575px)" srcSet={backgroundS}></source>
                <source media="(max-width: 991px)" srcSet={backgroundM}></source>
                <img className="mv-background-img" src={background} alt="Background"></img>
            </picture>
        </section>
    )
}