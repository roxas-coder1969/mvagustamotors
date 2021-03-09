import React, { useState, useEffect } from "react";
import { Spring } from "react-spring/renderprops";
import { get } from "../backend/fetchApi";
import ReactDOM from "react-dom";
function closeMotorList() {
  document.getElementsByClassName("motor-list")[0].style.width = "0vw";
  document.getElementsByClassName("motor-list")[0].style.opacity = "0";
  // $('.motor-list').css("opacity", "0");
  document.getElementsByClassName("motorList-container-left")[0].style.width =
    "0vw";
  document.getElementsByClassName("motorList-container-left")[0].style.opacity =
    "0";
  document.getElementById("body").style.overflow = "scroll";
  // $('.motorList-container-left').css("opacity", "0");
}
function hoverBlurOthers(index) {
  for (
    var i = 0;
    i < document.getElementsByClassName("motorItem").length;
    i++
  ) {
    document.getElementsByClassName("motorItem")[i].style.filter =
      "brightness(65%) blur(2px)";
    document.getElementsByClassName("motorItem")[i].style.transition =
      "all 0.2s ease";
  }
  document.getElementsByClassName("motorItem")[index].style.filter =
    "brightness(100%) blur(0px)";
}
function removeBlurOthers() {
  for (
    var i = 0;
    i < document.getElementsByClassName("motorItem").length;
    i++
  ) {
    document.getElementsByClassName("motorItem")[i].style.filter =
      "brightness(100%) blur(0)";
  }
}
function MotorListOfAType({ motors, selectedType }) {
  useEffect(() => {
    for (
      let key = 0;
      key < document.getElementsByClassName("motorItem").length;
      key++
    ) {
      document.getElementsByClassName("motorItem")[key].addEventListener(
        "mouseover",
        () => {
          hoverBlurOthers(key);
        },
        true
      );
      document
        .getElementsByClassName("motorItem")
        [key].addEventListener("mouseout", removeBlurOthers, true);
    }
  });
  return (
    <>
      {!motors[selectedType]
        ? null
        : // : motors[selectedType].map((item, index) => <div key={item} item={index} className="motorItem" style={{backgroundImage: `url('./img/${item[1]}')`, backgroundSize: 'contain'}}>{item}</div>)}
          /* : motors[selectedType].map((item) => <div key={item} className="motorItem">{item[0]}</div>)} */
          motors[selectedType].map((item, index) => (
            <Spring
              from={{
                opacity: 0,
                marginTop: -28,
                transition: "0.1s ease-in-out",
              }}
              to={{ opacity: 1, marginTop: 0, transition: "0.1s ease-in-out" }}
            >
              {(props) => (
                <a
                  style={props}
                  href={item[5]}
                  key={"mtn-" + item}
                  index={"mt-" + index}
                  className="motorItem"
                >
                  <div
                    className="motorItem-image"
                    style={{
                      backgroundImage: `url('./img/${item[1]}')`,
                      backgroundSize: "contain",
                    }}
                  ></div>
                  <div className="motorItem-infor">
                    <div className="motorItem-infor-top">
                      <h3>{selectedType}</h3>
                      <p>{item[0]}</p>
                    </div>
                    <div className="motorItem-infor-bottom">
                      <div className="motorItem-infor-bottom-left">
                        <h4>CYLINDERS</h4>
                        <p>
                          {item[2]}
                          <span></span>
                        </p>
                      </div>
                      <div className="motorItem-infor-bottom-center">
                        <h4>CYLINDERS CAPACITY</h4>
                        <p>
                          {item[3]}
                          <span>CC</span>
                        </p>
                      </div>
                      <div className="motorItem-infor-bottom-right">
                        <h4>HRS-POWER</h4>
                        <p>
                          {item[4]}
                          <span>HP</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </Spring>
          ))}
    </>
  );
}
export default function TypeMotor() {
  const [types, setTypes] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [motors, setMotors] = useState({});

  function CloseButton() {
    //hàm này để thông báo rằng khi user click vào icon X thì state motor sẽ set mặc định luôn loại xe rush để nó hiện khi mở lại nav
    const handleClick = () => {
      get("/motor?type=Rush").then((response) => {
        // setMotors({ ["Rush"]: response.data });
        setMotors({ "Rush": response.data });
      });
      setSelectedType("Rush");
    };
    return (
      <div
        className="close-motorList-icon"
        onClick={() => {
          closeMotorList();
          handleClick();
        }}
        style={{ zIndex: 100 }}
      >
        x
      </div>
    );
  }
  //useEffect này dùng để đọc từ data tất cả dữ liệu về type của xe, lưu trong state Types
  useEffect(() => {
    get("/types").then((response) => {
      setTypes(response.data);
    });
    //hàm này dùng để responsive height của .motorType
    const motorTypeLength = document.getElementsByClassName("motorType").length;
    for (var i = 0; i < motorTypeLength; ++i) {
      document.getElementsByClassName("motorType")[i].style.height =
        (1 / motorTypeLength) * 100 + "%";
    }
    //hàm này dùng để check types null hay ko, nếu !null thì render ra list xe đầu tiên
    if (types != null) {
      get(`/motor?type=${types[0]}`).then((response) => {
        setMotors((prev) => ({
          // ...prev,
          [selectedType]: response.data,
        }));
      });
    }
  }, [types]);
  useEffect(() => {
    // hàm if dưới dùng để check xem trong state( motors ) đã tồn tại obj motor thuộc loại đã chọn chưa, nếu chưa thì add còn ko thì stop.
    if (selectedType && !motors[selectedType]) {
      get(`/motor?type=${selectedType}`).then((response) => {
        setMotors((prev) => ({
          // ...prev,
          [selectedType]: response.data,
        }));
      });
    }
    console.log(motors);
    ReactDOM.render(
      <MotorListOfAType motors={motors} selectedType={selectedType} />,
      document.getElementById("motorItems")
    );
    ReactDOM.render(
      <CloseButton />,
      document.getElementById("motorList-container-left-top")
    );
  }, [selectedType, motors]);

  if (!types) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {types.map((type, index) => (
        <div className="motorType" onClick={() => setSelectedType(type)}>
          {type}
        </div>
      ))}
    </>
  );
}
