import React, {useState} from 'react';
import {dataHeader} from './newMVData';
export function MVNewsHeader(){
    const [object, setObject] = useState(dataHeader[0]);
    return(
        <>
            <div className = "news-contain">
                <div className = "news-title-content-large">
                    <div className = "news-date">
                        {object.date}
                    </div>    
                    <h3>{object.title}</h3>
                    <p>{object.content}</p>        
                </div>
                <div className = "news-img-large">
                    <picture>
                    <source media="(max-width: 575px)" srcSet={"./img/news/"+object.imgS}></source>
                <source media="(max-width: 991px)" srcSet={"./img/news/"+object.imgM}></source>
                        <img className ="news__img" src = {"./img/news/"+object.imgL} alt ="img"></img>
                    </picture>
                </div>
            </div>
        </>
    )
}