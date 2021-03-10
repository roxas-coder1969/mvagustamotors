import React, { useState, useEffect } from 'react';
import { data } from "./mvCertifiedData";

export const progresses = [
    { p: "01", head: "THE OFFICIAL MV AGUSTA CETIFICATION" },
    { p: "02", head: "DISCOVER THE BENEFIT" }
]


export function MVCertifiedCenter() {
    const [object, setObject] = useState(data[0]);
    var width1, width2;
    var id1, id2;

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
        var i = 0;
        while (i == 0) {
            i = 1;
            document.getElementsByClassName("certified-button-label")[0].classList.add("certified-button-label-change");
            document.getElementsByClassName("certified-button-label")[1].classList.remove("certified-button-label-change");
            document.getElementById("certified-button-border-change1").classList.add("certified-button-border-changed");
            document.getElementById("certified-button-border-change2").classList.remove("certified-button-border-changed");
            width1 = 0;
            id1 = setInterval(frame, 2 - 0);

            function frame() {
                if (width1 > 100) {
                    clearInterval(id1);
                    animationChange2();
                }
                else {
                    width1 += 0.1;
                    document.getElementById("certified-button-border-change1").style.width = width1 + "%";
                }
            }
        }
    }
    function animationChange2() {
        clearInterval(id1);
        if (object == data[1]) { setObject(data[0]); }
        width1 = 100;
        // document.getElementById("certified-button-border-change1").style.width = width1 + "%";

        document.getElementsByClassName("certified-button-label")[1].classList.remove("certified-button-label-reset");
        document.getElementsByClassName("certified-button-label")[1].classList.add("certified-button-label-change");
        document.getElementById("certified-button-border-change2").classList.add("certified-button-border-changed");
        document.getElementById("certified-button-border-change1").classList.remove("certified-button-border-changed");
        document.getElementById("certified-button-border-change1").classList.add("certified-button-border-full");
        document.getElementsByClassName("certified-button-label")[0].classList.add("certified-button-label-change");
        let i = 0;
        width2 = 0;
        // document.getElementById("certified-button-border-change2").classList.add("certified-button-border-changed");
        // document.getElementsByClassName("certified-button-label")[1].classList.add("certified-button-label-change");
        while (i == 0) {
            i = 1;
            id2 = setInterval(frame, 2 - 0);
            function frame() {
                if (width2 >= 100) {
                    clearInterval(id2);
                    i = 0;
                } else {
                    width2 += 0.1;
                    document.getElementById("certified-button-border-change2").style.width = width2 + "%";
                }
            }
        }

    }

    useEffect(() => {
        setTimeout(() => {
            changeBackground()
        }, 5000);
        animationChange1();
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
                        <img src={"img/" + object.img} alt=""/>
                    </div>
                </div>
                <div className="certified-center-button">
                    <div className="certified-center-button-left" onClick={animationChange1}>
                        <Progress signal="left" />
                    </div>
                    <div className="certified-center-button-right" onClick={animationChange2}>
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