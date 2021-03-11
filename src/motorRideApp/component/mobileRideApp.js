import React from 'react';

export function MobileRideAppContainer() {
    return (
      <>
        <div className="Ride-App-Mobi">
          <div className="mobi_app_left">
            <div className="mobi_app_title">
              <div className="mobi_app_head">
                <h1>
                  <strong>MV RIDE APP</strong>
                </h1>
              </div>
              <p className="mobi_app_descr">
                A totally new level of connectivity between you and your
                motorcycle.
              </p>
            </div>
            <div className="mobi_app_button">
              <img
                className="mobi_app_store store1"
                src="/img/app-store.png"
                alt
              ></img>
              <img
                className="mobi_app_store"
                src="/img/google-play.png"
                alt
              ></img>
            </div>
          </div>
          <div className="mobi_app_right">
            <picture className="mobi_app_picture">
              <source
                media="(max-width: 991px)"
                srcSet="/img/app-preview-m.png"
                alt
              ></source>
              <img
                className="mobi_app_img"
                src="/img/app-preview-xl.png"
                alt
              ></img>
            </picture>
          </div>
        </div>
      </>
    );
}