import React from "react";

export default function Motor3dBodyTech({ listImgs }) {
  function changeDescription(event, index) {
    document.getElementById("model3d-body-tech-left-title").innerHTML =
      listImgs[index].contentTitle;
    document.getElementById("model3d-body-tech-left-content").innerHTML =
      listImgs[index].content;
    document.getElementsByClassName(
      "model3d-body-tech-right"
    )[0].style.backgroundImage = "url(./img/" + listImgs[index].img + ")";
  }
  return (
    <>
      <div className="model3d-body-tech">
        <div className="model3d-body-tech-left">
          <h4 id="model3d-body-tech-left-title">{listImgs[0].contentTitle}</h4>
          <p id="model3d-body-tech-left-content">{listImgs[0].content}</p>
          <div className="button-list">
            {listImgs.map((item, index) => (
              <button
                className="button-small"
                onClick={(event) => {
                  changeDescription(event, index);
                }}
              ></button>
            ))}
          </div>
        </div>
        <div
          className="model3d-body-tech-right"
          style={{ backgroundImage: "url(./img/" + listImgs[0].img + ")" }}
        >
          <div className="model3d-body-tech-side"></div>
        </div>
      </div>
    </>
  );
}
