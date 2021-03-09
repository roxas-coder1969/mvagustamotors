import React, { useEffect } from "react";

export default function Motor3d({ models }) {
  var check = 0;
  var oldX = 0;
  var oldX_mobile = 0;
  var idOriginal = "original__";
  var idMod = "mod__";
  function create3dModel(className, idName, imgSrc, location) {
    for (var i = 0; i < 36; i++) {
      var newImg = document.createElement("img");
      newImg.setAttribute("src", "./img/" + imgSrc + "_" + i + ".png");
      newImg.setAttribute("width", "100%");
      newImg.setAttribute("class", className);
      newImg.setAttribute("id", idName + i);
      var drContainer = document.getElementById(location);
      drContainer.appendChild(newImg);
    }
  }
  function renderModel3d() {
    if (models.length < 2) {
      create3dModel("dr-img", idOriginal, models[0].link, "model3d-original");
      moveImgSingle(idOriginal);
    } else {
      create3dModel("dr-img", idOriginal, models[0].link, "model3d-original");
      create3dModel("dr-img-mod", idMod, models[1].link, "model3d-mod");
      moveImgDouble(idOriginal, idMod);
    }
    document
      .getElementsByClassName("model3d-i")[0]
      .classList.add("model3d-i__active");
  }
  async function moveImgDouble(nameIdOriginal, nameIdMod) {
    document.getElementById(nameIdOriginal + 0).classList.add("dr-img-show");
    document.getElementById(nameIdMod + 0).classList.add("dr-img-show");
    function mouseMove(event) {
      var x = event.pageX;
      // var o= event.clientX;
      if (x > oldX) {
        check++;
        if (check > 35) {
          check = 0;
        }
      } else if (x < oldX) {
        check--;
        if (check < 0) {
          check = 35;
        }
      }
      for (var i = 0; i < 36; i++) {
        document
          .getElementById(nameIdOriginal + i)
          .classList.remove("dr-img-show");
        document.getElementById(nameIdMod + i).classList.remove("dr-img-show");
      }
      document
        .getElementById(nameIdOriginal + check)
        .classList.add("dr-img-show");
      document.getElementById(nameIdMod + check).classList.add("dr-img-show");
      oldX = event.pageX;
    }
    function touchMove(event) {
      var x = event.pageX;
      // var o= event.clientX;
      var o = event.changedTouches[0].pageX;
      if (x > oldX || o > oldX_mobile) {
        check++;
        if (check > 35) {
          check = 0;
        }
      } else if (x < oldX || o < oldX_mobile) {
        check--;
        if (check < 0) {
          check = 35;
        }
      }
      for (var i = 0; i < 36; i++) {
        document
          .getElementById(nameIdOriginal + i)
          .classList.remove("dr-img-show");
        document.getElementById(nameIdMod + i).classList.remove("dr-img-show");
      }
      document
        .getElementById(nameIdOriginal + check)
        .classList.add("dr-img-show");
      document.getElementById(nameIdMod + check).classList.add("dr-img-show");
      oldX = event.pageX;
      oldX_mobile = event.changedTouches[0].pageX;
    }

    //event-listener!!!!!
    document
      .getElementById("scale-lt")
      .addEventListener("mousedown", function (event) {
        document.getElementById("scale-lt").onmousemove = function (event) {
          mouseMove(event);
        };
      });
    document
      .getElementById("scale-lt")
      .addEventListener("mouseup", function (event) {
        document.getElementById("scale-lt").onmousemove = null;
      });
    document
      .getElementById("scale-lt")
      .addEventListener("touchstart", function (event) {
        document.getElementById("scale-lt").ontouchmove = function (event) {
          touchMove(event);
        };
      });
    document
      .getElementById("scale-lt")
      .addEventListener("touchend", function (event) {
        document.getElementById("scale-lt").ontouchmove = null;
      });
  }
  async function moveImgSingle(nameIdOriginal) {
    document.getElementById(nameIdOriginal + 0).classList.add("dr-img-show");
    function mouseMove(event) {
      var x = event.pageX;
      // var o= event.clientX;
      if (x > oldX) {
        check++;
        if (check > 35) {
          check = 0;
        }
      } else if (x < oldX) {
        check--;
        if (check < 0) {
          check = 35;
        }
      }
      for (var i = 0; i < 36; i++) {
        document
          .getElementById(nameIdOriginal + i)
          .classList.remove("dr-img-show");
      }
      document
        .getElementById(nameIdOriginal + check)
        .classList.add("dr-img-show");
      oldX = event.pageX;
    }
    function touchMove(event) {
      var x = event.pageX;
      // var o= event.clientX;
      var o = event.changedTouches[0].pageX;
      if (x > oldX || o > oldX_mobile) {
        check++;
        if (check > 35) {
          check = 0;
        }
      } else if (x < oldX || o < oldX_mobile) {
        check--;
        if (check < 0) {
          check = 35;
        }
      }
      for (var i = 0; i < 36; i++) {
        document
          .getElementById(nameIdOriginal + i)
          .classList.remove("dr-img-show");
      }
      document
        .getElementById(nameIdOriginal + check)
        .classList.add("dr-img-show");
      oldX = event.pageX;
      oldX_mobile = event.changedTouches[0].pageX;
    }

    //event-listener!!!!!
    document
      .getElementById("scale-lt")
      .addEventListener("mousedown", function (event) {
        document.getElementById("scale-lt").onmousemove = function (event) {
          mouseMove(event);
        };
      });
    document
      .getElementById("scale-lt")
      .addEventListener("mouseup", function (event) {
        document.getElementById("scale-lt").onmousemove = null;
      });
    document
      .getElementById("scale-lt")
      .addEventListener("touchstart", function (event) {
        document.getElementById("scale-lt").ontouchmove = function (event) {
          touchMove(event);
        };
      });
    document
      .getElementById("scale-lt")
      .addEventListener("touchend", function (event) {
        document.getElementById("scale-lt").ontouchmove = null;
      });
  }
  function changeMotor(onButton) {
    for (var i = 0; i < 2; i++) {
      document
        .getElementsByClassName("model3d-i")
        [i].classList.remove("model3d-i__active");
      document
        .getElementsByClassName("model3d")
        [i].classList.remove("model3d__show");
    }
    document
      .getElementsByClassName("model3d-i")
      [onButton].classList.add("model3d-i__active");
    document
      .getElementsByClassName("model3d")
      [onButton].classList.add("model3d__show");
  }
  useEffect(() => {
    renderModel3d();
    var imgs = document.images,
      len = imgs.length,
      counter = 0;

    [].forEach.call(imgs, function (img) {
      if (img.complete) incrementCounter();
      else img.addEventListener("load", incrementCounter, false);
    });

    function incrementCounter() {
      counter++;
      if (counter === len) {
        console.log("aaaaaa");
      }
    }
  });
  return (
    <>
      <div className="dr-container" id="dr-container">
        <picture
          id="model3d-original"
          className="model3d model3d__show"
          style={{
            width: "100%",
            display: "block",
            height: "auto",
            position: "absolute",
          }}
        ></picture>
        <picture
          id="model3d-mod"
          className="model3d"
          style={{
            width: "100%",
            display: "block",
            height: "auto",
            position: "absolute",
          }}
        ></picture>
        <div className="model3d-items-lt">
          {models.map((model, index) => (
            <div
              className="model3d-i"
              onClick={
                models.length < 2 ? null : changeMotor.bind(Event, index)
              }
            >
              <span
                className="m-i-l-bt"
                style={{
                  background: model.secondaryColor,
                }}
              >
                <span style={{ background: model.mainColor }}></span>
              </span>
              <p className="m-i-l-p">{model.nameOfColor}</p>
            </div>
          ))}
        </div>
        <div
          id="scale-lt"
          style={{ width: "100%", height: "50%", zIndex: 10 }}
        ></div>
      </div>
    </>
  );
}
