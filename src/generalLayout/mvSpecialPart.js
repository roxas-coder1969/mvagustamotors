import React, { useEffect, useState } from "react";

export default function MVSpecialPart() {
  function leftPartHidden() {
    document
      .getElementById("right-first-href")
      .classList.add("href-to-up-first");
    document.getElementById("right-last-href").classList.add("href-to-up-last");
    document
      .getElementById("left-first-href")
      .classList.add("href-to-down-first");
    document
      .getElementById("left-last-href")
      .classList.add("href-to-down-last");
    document.querySelector(".part-img-left").classList.add("img-href-hidden");
    document.querySelector(".left-part").classList.add("part-blur");
  }
  function leftPartAppear() {
    document
      .getElementById("right-first-href")
      .classList.remove("href-to-up-first");
    document
      .getElementById("right-last-href")
      .classList.remove("href-to-up-last");
    document
      .getElementById("left-first-href")
      .classList.remove("href-to-down-first");
    document
      .getElementById("left-last-href")
      .classList.remove("href-to-down-last");
    document
      .querySelector(".part-img-left")
      .classList.remove("img-href-hidden");
    document.querySelector(".left-part").classList.remove("part-blur");
  }
  function rightPartHidden() {
    document
      .getElementById("left-first-href")
      .classList.add("href-to-up-first");
    document.getElementById("left-last-href").classList.add("href-to-up-last");
    document
      .getElementById("right-first-href")
      .classList.add("href-to-down-first");
    document
      .getElementById("right-last-href")
      .classList.add("href-to-down-last");
    document.querySelector(".part-img-right").classList.add("img-href-hidden");
    document.querySelector(".right-part").classList.add("part-blur");
  }
  function rightPartAppear() {
    document
      .getElementById("left-first-href")
      .classList.remove("href-to-up-first");
    document
      .getElementById("left-last-href")
      .classList.remove("href-to-up-last");
    document
      .getElementById("right-first-href")
      .classList.remove("href-to-down-first");
    document
      .getElementById("right-last-href")
      .classList.remove("href-to-down-last");
    document
      .querySelector(".part-img-right")
      .classList.remove("img-href-hidden");
    document.querySelector(".right-part").classList.remove("part-blur");
  }
  const [href, setHref] = useState({
    firstHref: "APPAREL",
    lastHref: "SPECIAL PARTS",
  });

  useEffect(() => {
    function leftPartEvent() {
      rightPartHidden();
      leftPartAppear();
    }
    function rightPartEvent() {
      leftPartHidden();
      rightPartAppear();
    }
    if (window.innerWidth > 991) {
      leftPartHidden();
      document
        .querySelector(".left-part")
        .addEventListener("mouseover", leftPartEvent);
      document
        .querySelector(".right-part")
        .addEventListener("mouseover", rightPartEvent);
    }
    window.addEventListener("resize", reportWindowSize);
    function reportWindowSize() {
      if (window.innerWidth < 991) {
        document
          .querySelector(".left-part")
          .removeEventListener("mouseover", leftPartEvent);
        document
          .querySelector(".right-part")
          .removeEventListener("mouseover", rightPartEvent);
        leftPartAppear();
        rightPartAppear();
      } else {
        leftPartHidden();
        document
          .querySelector(".left-part")
          .addEventListener("mouseover", leftPartEvent);
        document
          .querySelector(".right-part")
          .addEventListener("mouseover", rightPartEvent);
        window.addEventListener("resize", reportWindowSize);
      }
    }
  }, []);
  return (
    <div className="mv-special-part">
      <div className="left-part">
        <div className="left-content">
          <img
            className="mv-special-part-img part-img-left"
            alt=""
            src="./img/apparel.png"
          ></img>
          <div className="part-content-href">
            <a id="left-first-href" href>
              {href.firstHref}
            </a>
            <a id="left-last-href" href>
              {href.firstHref}
            </a>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="right-content">
          <img
            className="mv-special-part-img part-img-right"
            alt=""
            src="./img/special_parts.png"
          ></img>
          <div className="part-content-href">
            <a id="right-first-href" href>
              {href.lastHref}
            </a>{" "}
            {/*first*/}
            <a id="right-last-href" href>
              {href.lastHref}
            </a>{" "}
            {/*last*/}
          </div>
        </div>
      </div>
    </div>
  );
}
