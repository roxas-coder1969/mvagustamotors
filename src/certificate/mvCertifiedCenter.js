import React, { useState, useEffect } from 'react';
import { data } from "./mvCertifiedData";

export const progresses = [
    { p: "01", head: "THE OFFICIAL MV AGUSTA CETIFICATION" },
    { p: "02", head: "DISCOVER THE BENEFIT" }
]


export function MVCertifiedCenter() {
    const [object, setObject] = useState(data[0]);
    let width1, width2;
    let id1, id2;
    var y,y2;

    function changeBackground() {
        if (object == data[0]) {
            setObject(data[1]);
            // animationChange1();
        }
        else {
            // animationChange2();
            setObject(data[0]);
        }
    }
  

    function animationChange1() {

        if (object == data[0]) { setObject(data[1]); }

        y = document.getElementById("change1");
        y.addEventListener("click", animationChange1); 
        y2 = document.getElementById("change2");
        y2.addEventListener("click", animationChange2); 
        width1 = 0;
        document.getElementById("certified-button-border-change1").style.width = 0 + "%";
        clearInterval(id1);
       
        document.getElementsByClassName("certified-button-label")[0].classList.add("certified-button-label-change");
        document.getElementsByClassName("certified-button-label")[1].classList.remove("certified-button-label-change");
        document.getElementById("certified-button-border-change1").classList.add("certified-button-border-changed");
        document.getElementById("certified-button-border-change2").classList.remove("certified-button-border-changed");
        id1 = setInterval(frame, 50 - 0);
        function frame() {
            if (width1 >= 100) {
                clearInterval(id1);

                animationChange2();
            }
            else {
                width1++;
                document.getElementById("certified-button-border-change1").style.width = width1 + "%";
            }
        }
    }

    function animationChange2() {
        setObject(data[0]);

        clearInterval(id1);
        document.getElementById("certified-button-border-change1").style.width = 100 + "%";
        width2 = 0;
        document.getElementById("certified-button-border-change2").style.width = width2 + "%";
        console.log("truoc 2" + id1);

        clearInterval(id2);
        document.getElementById("certified-button-border-change1").style.width = "100%";
        document.getElementsByClassName("certified-button-label")[1].classList.remove("certified-button-label-reset");
        document.getElementsByClassName("certified-button-label")[1].classList.add("certified-button-label-change");
        document.getElementById("certified-button-border-change2").classList.add("certified-button-border-changed");
        document.getElementById("certified-button-border-change1").classList.remove("certified-button-border-changed");
        document.getElementById("certified-button-border-change1").classList.add("certified-button-border-full");
       
        id2 = setInterval(frame, 10 - 0);
        function frame() {
            if (width2 >= 100) {
                clearInterval(id2);
            } else {
                width2 += 0.1;
                document.getElementById("certified-button-border-change2").style.width = width2 + "%";
            }
        }
    }

    useEffect(() => {
        animationChange1();
        setTimeout(() => {
            changeBackground()
        }, 5000);
    }, [])

    return (
        <>
            <div className="certified-contain-box">
                <h2 className="contain-box-title font1">
                    PRE-OWNED PROGRAM
                </h2>
                <div className="certified-center-content">
                    <div className="certified-center-left">
                        <div className="center-left-title font1">
                            {object.title}
                        </div>
                        <p>
                            {object.para1}
                        </p>
                        <p>
                            {object.para2.map((para2_ct) => (
                                <> {para2_ct}   <br></br></>
                            ))}
                        </p>
                    </div>
                    <div className="certified-center-right">
                        <img src={"img/" + object.img} />
                    </div>
                </div>
                <div className="certified-center-button">
                    <div className="certified-center-button-left" id="change1">
                        <Progress signal="left" />
                    </div>
                    <div className="certified-center-button-right" id="change2">
                        <Progress signal="right" />
                    </div>
                </div>
            </div>
        </>
    );
}
export function Progress({ signal }) {
    const [progress, setProgress] = useState(progresses[0]);
    let check = 1;
    if (signal == "right") check = 2;
    useEffect(() => { if (signal == "right") setProgress(progresses[1]) });
    return (
        <>
            <div className="certified-button-border">
                <div className="certified-button-border-change" id={"certified-button-border-change" + check}>

                </div>
            </div>
            <div className="certified-button-label">
                <p className="label-count">
                    {progress.p}
                </p>
                <p className="label-header">
                    {progress.head}
                </p>
            </div>
        </>
    );
}