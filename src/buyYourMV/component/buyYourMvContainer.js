import React from "react";
const contents=[
    {
        title: "FIND YOUR BIKE AND BOOK YOUR PRODUCTION SLOT",
        data: "Come to see us, get in touch online or visit your local dealer. Together we will find the right model, colours and accessories that best suit your motorcycling dream. We will assist you in every step of the process for a hassle-free buying experience, and to guarantee a timely delivery, with as little as €100 you can secure your priority production slot when ordering online.",
    },
    {
      title: "WELCOME TO OUR WORLD",
      data: "The elegant Welcome Kit, delivered with your brand new bike, contains your keys, the user’s manuals and all the service forms you will need for the perfect maintenance of your bike. A letter from our CEO, also signed by all the mechanics involved in its making, will certify you as an owner."
    },
    {
      title: "RACING DNA",
      data: "For limited editions, a unique racing kit with special accessories will let your bike express its full potential on the racetrack."
    },
    {
      title: "EASY FINANCING",
      data: "Unsure about how to pay for your MV Agusta? You may want to consider one of the dedicated personal finance solutions offered by MV Agusta Finance.*",
      note: "*IN PARTICIPATING COUNTRIES: ITALY, UK, FRANCE, SPAIN, GERMANY"
    },
    {
      title: "WE RIDE BY YOUR SIDE",
      data: "Every MV Agusta bike has a 3 years manufacturer's warranty for your complete peace of mind.* In addition, we offer a 2 years 24/7 road assistance package that will never let you down, completely free, covering you anytime and anywhere.**",
      note: "*IN PARTICIPATING COUNTRIES. DURATION AND CONDITIONS OF COVERAGE MAY VARY ACCORDING TO MARKET OF REFERENCE. CONTACT YOUR LOCAL MV AGUSTA DEALER FOR THE COMPLETE CONDITIONS IN YOUR COUNTRY. ** CONDITIONS OF COVERAGE MAY VARY ACCORDING TO COUNTRY OF REFERENCE. CONSULT THE COMPLETE CONDITIONS FOR YOUR CONUTRY here."
    },
    {
      title: "LOG-IN INTO THE DIGITAL MV AGUSTA EXPERIENCE",
      data: "Get connected with MV Ride, the app that will allow you to monitor your bike’s parameters, manage your engine settings, interact with the MV Agusta community and navigate on your epic journeys. Take your riding to the next level and enjoy your freedom to its fullest.**",
      note: "** WORKS WITH ALL 2021, EURO 5 MODELS AND ON BRUTALE 1000 AND SUPERVELOCE EURO 4 MODELS."
    },
    {
      title: "KIT YOURSELF OUT",
      data: "Make your MV Agusta even more personal thanks to the choice of original components from our special parts catalogue. Live your dream and get kitted out in style with MV Agusta branded apparel and accessories. Visit our online store."
    },
];

export default function BuyYourMvContainer() {
  //chinh
   return (
    <>
    <div className="area-contents">
      <div className="area-contents-size">
    { contents.map((content, index) => <>
      <div className="content">
      <div className="title title-content">{index+1}.<br/>{content.title}</div>
      <div>
        <p className="data-content">{content.data}</p>
        <p className="note-content">{content.note}</p>
      </div>
      </div>
    </>) }
    </div>
    </div>
    </>
  );
}
export function BuyYourMvContent({ content }) {
  //content
 
}
