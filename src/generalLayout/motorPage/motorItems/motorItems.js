import React, { useEffect } from "react";

export default function MotorItem({advantages}) {
  function openContent(i) {
    for (
      var k = 0;
      k < document.getElementsByClassName("motorItems-container").length;
      k++
    ) {
      document
        .getElementsByClassName("motorItems-container")
        [k].classList.remove("motorItems-container__show");
    }
    document
      .getElementsByClassName("motorItems-container")
      [i].classList.add("motorItems-container__show");
  }
  useEffect(() => {
    document
      .getElementsByClassName("motorItems-container")[0]
      .classList.add("motorItems-container__show");
    for (
      var i = 0;
      i < document.getElementsByClassName("motorItems-container").length;
      i++
    ) {
      document
        .getElementsByClassName("motorItems-container")
        [i].addEventListener("click", openContent.bind(Event, i));
    }
  }, []);
  return (
    <>
      <div className="motorItems-layout">
        {advantages.map((advantage) => (
          <div className="motorItems-container">
            <picture className="items_ad_pic">
              <source
                media="(max-width: 767px)"
                srcset={`./img/${advantage.img.small}`}
              ></source>
              <source
                media="(max-width: 991px)"
                srcset={`./img/${advantage.img.medium}`}
              ></source>
              <source
                media="(max-width: 1500px)"
                srcset={`./img/${advantage.img.large}`}
              ></source>
              <img
                className="advantages__img"
                alt=""
                src={`./img/${advantage.img.original}`}
              ></img>
            </picture>
            <div className="mI-con-preview">
              <div className="mI-con-pr-title">{advantage.name}</div>
              <span class="bt-plus bt-plus-icon plus-bn"></span>
            </div>
            <div className="mI-con-content">
              <div className="mI-con-ct-title">{advantage.title}</div>
              <div className="mI-con-ct-description">
                {advantage.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
