import React from "react";

export function MotorRideAppHistoryContainer() {
  return (
    <>
      <div className="Ride-App-History">
        <div className="history_title">
          <h1>
            MV AGUSTA
          </h1>
          <h2>COMMUNITY</h2>
        </div>
        <div className="history_descr">
          <p>
            Our app allows MV owners to completely personalize their riding
            experience. A totally new level of connectivity between the user and
            their motorcycle, the MV Ride app will now let the entire MV Agusta
            community to interact with each other by sharing their traveling
            routes and experiences.
          </p>
        </div>
        <picture class="history__picture">
          <source
            media="(max-width: 991px)"
            srcset="./img/community-m.png"
          ></source>
          <img
            class="history__img"
            src="./img/community-xl.png"
            alt=""
          ></img>
        </picture>
      </div>
    </>
  );
}
