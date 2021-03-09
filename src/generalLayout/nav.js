import React from "react";
import TypeMotor from "./typeMotor";
function handleClick() {
  for (
    var i = 0;
    i < document.getElementsByClassName("motorType").length;
    i++
  ) {
    document
      .getElementsByClassName("motorType")
      [i].classList.remove("type-chosen");
  }
  // document.getElementsByClassName('motorType')[chosen].classList.add('type-chosen');
  this.classList.add("type-chosen");
}
function openMotorList() {
  document.getElementById("motor-list").style.width = "100vw";
  document.getElementById("motor-list").style.width = "100vw";
  document.getElementById("motor-list").style.opacity = "1";
  document.getElementsByClassName("motorList-container-left")[0].style.width =
    "40%";
  document.getElementsByClassName(
    "motorList-container-left"
  )[0].style.opacity = 1;
  for (
    var i = 0;
    i < document.getElementsByClassName("motorType").length;
    i++
  ) {
    document
      .getElementsByClassName("motorType")
      [i].classList.remove("type-chosen");
    document
      .getElementsByClassName("motorType")
      [i].addEventListener("click", handleClick, true);
  }
  document.getElementsByClassName("motorType")[0].classList.add("type-chosen");
  document.getElementById("body").style.overflow = "hidden";
}
export default function Nav({color}) {
  return (
    <>
      <div className="motor-list" id="motor-list">
        <div className="motorList-container-left" id="motorList-container-left">
          <div
            className="motorList-container-left-top"
            id="motorList-container-left-top"
          ></div>
          <div
            className="motorList-container-left-center"
            id="motorList-container-center-bottom"
          >
            <TypeMotor />
          </div>
          <div className="motorList-container-left-bottom"></div>
        </div>
        <div
          className="motorList-container-right"
          id="motorList-container-right"
        >
          <div className="motorItems-top"></div>
          <div className="motorItems-center" id="motorItems"></div>
          <div className="motorItems-bottom"></div>
        </div>
      </div>
      <div className="mv-nav" id="mv-nav">
        <div className="mv-nav-container">
          <div className="mv-container-div" onClick={openMotorList}>
            <p className="nav-name" style={{color: color}}>Models</p>
          </div>
        </div>
        {/* <div className="mv-nav-container">
          <a className="mv-container-div" href="home">
            <p className="nav-name">Home</p>
          </a>
        </div> */}
        <div className="mv-nav-container">
          <div className="mv-container-div">
            <p className="nav-name" style={{color: color}}>Menu</p>
          </div>
        </div>
      </div>
    </>
  );
}
