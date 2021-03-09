import React from 'react';

export function BodyContainer0() {
    return (
        <>
            <div className="mobi_app">
                <div className="mobi_app_left">
                    <div className="mobi_app_title">
                        <div className="mobi_app_head"><h1><strong>MV RIDE APP</strong></h1></div>
                        <div className="mobi_app_descr"><p>A totally new level of connectivity between you and your motorcycle.</p></div>
                    </div>
                    <div className="mobi_app_button">
                        <img className="mobi_app_store store1" src="/img/rideApp/app-store.png" alt></img>
                        <img className="mobi_app_store" src="/img/rideApp/google-play.png" alt></img>
                    </div>
                </div>
                <div className="mobi_app_right">
                {/* <div className="mobi_app_picture">
                            <img className="mobi_app_img" src="/image/app-preview-xl.png" alt></img>
                        </div> */}
                        <picture className="mobi_app_picture">
                            <source media="(max-width: 991px)" srcSet="/img/rideApp/app-preview-m.png" alt></source>
                            <img className="mobi_app_img" src="/img/rideApp/app-preview-xl.png" alt></img>
                        </picture>
                </div>
            </div>
            {/* <div className="mobi-app">
                <div className="mobi-app-des">
                    <div className="mobi_app_titmoble">
                        <div className="mobi_app_head"><h1><strong>MV RIDE APP</strong></h1></div>
                        <div className="mobi_app_descr"><p>A totally new level of connectivity between you and your motorcycle.</p></div>
                    </div>
                    <div className="mobi_app_button">
                        <img className="mobi_app_store store1" src="/image/app-store.png" alt></img>
                        <img className="mobi_app_store" src="/image/google-play.png" alt></img>
                    </div>
                </div>
                <div className="mobi-app-pucture">
                <img className="mobi_app_img" src="/image/app-preview-xl.png" alt></img>
                </div>
            </div> */}
        </>
    );
}