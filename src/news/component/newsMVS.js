import React from 'react';
export function MVNewsS() {
    return (
        <>
            <div className="news-contain-s">
                <div className="news-content-s">
                    <picture>
                        <source media="(max-width: 575px)" srcSet="./img/news/S1_575px.jpg"></source>
                        <img className="news__img" src="./img/news/S1.jpg" alt="img"></img>
                    </picture>
                    <div className="news-title-content-small">
                        <div class="news-header">
                            <span class="news-date">DEC 15</span>
                            <h3 class="news-title">MV AGUSTA’S SUPERVELOCE ALPINE LIMITED EDITION SOLD-OUT</h3>
                        </div>
                        <p class="news-text">Hours after live streaming presentation</p>
                    </div>
                </div>
                <div className="news-content-s">
                    <picture>
                        <source media="(max-width: 575px)" srcSet="./img/news/S2_575px.jpg"></source>
                        <img className="news__img" src="./img/news/S2.jpg" alt="img"></img>
                    </picture>
                    <div className="news-title-content-small">
                        <div class="news-header">
                            <span class="news-date">Nov 16</span>
                            <h3 class="news-title">MV AGUSTA’S CELEBRATION SUPERVELOCE 75 ANNIVERSARIO SOLD-OUT</h3>
                        </div>
                        <p class="news-text">Within seconds of launch</p>
                    </div>
                </div>
                <div className="news-content-s">
                    <picture>
                        <source media="(max-width: 575px)" srcSet="./img/news/S3_575px.jpg"></source>
                        <img className="news__img" src="./img/news/S3.jpg" alt="img"></img>
                    </picture>
                    <div className="news-title-content-small">
                        <div class="news-header">
                            <span class="news-date">OCT 29</span>
                            <h3 class="news-title">MV AGUSTA IS BROADENING ITS FINANCE SERVICES IN EUROPE</h3>
                        </div>
                        <p class="news-text">After successfully launching MV Agusta Finance in Italy and the UK, the brand is now extending the offer to customers in France, Germany and Spain</p>
                    </div>
                </div>
            </div>
        </>
    )
}