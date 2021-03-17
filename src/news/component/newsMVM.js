import React from 'react';
export function MVNewsM() {
    return (
        <>
            <div className="news-contain-m">
                <div className="news-content-m">
                    <picture>
                        <source media="(max-width: 575px)" srcSet="./img/news/M2_640px.jpg"></source>
                        <source media="(max-width: 991px)" srcSet="./img/news/M2_991px.jpg"></source>
                        <img className="news__img" src="./img/news/M2.jpg" alt="img"></img>
                    </picture>
                    <div class="news-title-content-medium">
                        <div class="news-header">
                            <span class="news-date">Jan 14</span>
                            <h3 class="news-title">MV AGUSTA’S SAN MARINO STYLING AND ENGINEERING CENTRE GETS TOTAL MAKEOVER</h3>
                        </div>
                        <p class="news-text">And welcomes new chief designer Stephane Zache</p></div>
                </div>
                <div className="news-content-m">
                    <picture>
                        <source media="(max-width: 575px)" srcSet="./img/news/M1_640px.jpg"></source>
                        <source media="(max-width: 991px)" srcSet="./img/news/M1_991px.jpg"></source>
                        <img className="news__img" src="./img/news/M1.jpg" alt="img"></img>
                    </picture>
                    <div class="news-title-content-medium">
                        <div class="news-header">
                            <span class="news-date">Dec 22</span>
                            <h3 class="news-title">MASTERPIECE FOR MV AGUSTA’S 75TH ANNIVERSARY</h3>
                        </div>
                        <p class="news-text">Swiss hyperwatch creator RO-NI to handcraft RMV automatic watch</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}