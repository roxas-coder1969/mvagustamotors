import React from 'react';
import BuyYourMvContainer from './buyYourMvContainer';


export default function BuyYourMvVareseJourney() {
    return(
        <>
        <BuyYourMvVarese/>
        <BuyYourMvJourney/>
        </>
    )
}

export function BuyYourMvVarese(){
    return(
        <>
        <div className="area-Varese">
            <div className="varese">
              <div className="title title-varese">HANDCRAFTED IN VARESE</div>
              <div className="content-varese">All MV Agusta motorcycles are hand-built in our historic plant on the shores of lake Varese, in Northern Italy. They are assembled with passion and pride by engineers and mechanics of incredible craftsmanship, using the finest materials and the most advanced technologies. Owning one of our models is more than simply possessing a bike, it means setting on a journey and becoming part of a whole new world, that of MV Agusta.</div>
            </div>
        </div>
        </>
    )
}

export function BuyYourMvJourney() {
    return(
        <>
        <div className="area-Journey">
            <div className="title title-journey">THE 7-STEP JOURNEY TO ENTER THE WORLD OF <span>MV AGUSTA</span></div>
            <BuyYourMvContainer/>
        </div>
        </>
    )
}