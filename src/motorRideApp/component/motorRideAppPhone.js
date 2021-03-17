import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Fade from "react-reveal/Fade";

export function MotorRideAppPhone({imgPhoneSrc}) {

    function MakeImgDisplayed(i){
    
        for(var j=0; j < document.getElementsByClassName("button-img-active").length; j++) {
            document.getElementsByClassName("button-img-active")[j].classList.remove("appear");
            document.getElementsByClassName("phone-image")[j].classList.remove("appear");
            document.getElementsByClassName("content-form")[j].classList.remove("appear");
        }
    
        document.getElementsByClassName("button-img-active")[i].classList.add("appear");
        document.getElementsByClassName("phone-image")[i].classList.add("appear");
        document.getElementsByClassName("content-form")[i].classList.add("appear");

        if (i===2) {
            document.getElementsByClassName("content-form")[i].classList.add("visible");
        }
    }; 

    return (
      <>
        <div className="moto-app-container">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="btn-container">
              <span
                className="button-img-active appear"
                onClick={MakeImgDisplayed.bind(Event, 0)}
              >
                MY BIKE
              </span>
              <span
                className="button-img-active"
                onClick={MakeImgDisplayed.bind(Event, 1)}
              >
                ITINERARIES
              </span>
              <span
                className="button-img-active"
                onClick={MakeImgDisplayed.bind(Event, 2)}
              >
                TRIPS
              </span>
            </div>
          </ScrollAnimation>
          <div className="images-container">
            <div className="phone-image appear">
              <img src={`/img/${imgPhoneSrc.imgSrc0}`} alt="" />
            </div>
            <div className="phone-image">
              <img src={`/img/${imgPhoneSrc.imgSrc1}`} alt="" />
            </div>
            <div className="phone-image">
              <img src={`/img/${imgPhoneSrc.imgSrc2}`} alt="" />
            </div>
          </div>
          <div className="content-container">
            <div className="content-form appear">
              <h1>PERSONALIZE YOUR BIKE</h1>
              <p>
                The Bike section allows to access the battery charge and fuel
                level. Every detail can be personalised: from the “engine”,
                “suspensions” and “safety” menus.
              </p>
              <p>
                Users will be able to change the setup of their bikes
                suspension, fork, rear suspension, and the steering damper.
                Traction control and ABS can also both be adjusted, as well as
                the custom map in the MVICS 2.0 platform.
              </p>
            </div>
            <div className="content-form">
              <h1>VISUALISE YOUR ROUTE</h1>
              <p>
                The user can easily visualise all the itineraries on the
                smartphone screen and follow the turn-by-turn navigation on the
                large, second generation TFT colour screen located on the bike.
              </p>
              <p>
                The level of detail is very high to make navigation easier and
                more immediate, without diverting the rider’s attention from the
                road. The section also allows to save itineraries for future
                use, with the possibility to share and receive itineraries from
                other MV Ride users for group trips.
              </p>
            </div>
            <div className="content-form">
              <h1>MV WORLD</h1>
              <p>
                Trips collects all the riding data from recent trips. Lean
                angles, gear shifts, throttle and other data are recorded and
                linked to the specific trip. Pictures taken during any trip can
                also be added and shared through the app, offering a unique way
                to preserve memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </>
    );
}