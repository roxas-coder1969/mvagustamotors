import React from 'react';
import Nav from '../generalLayout/nav';
import NavDesktop from '../generalLayout/navDesk';
import {MVNewsHeader} from './component/newsMVHeader';
import {MVNewsM} from './component/newsMVM';
import {MVNewsS} from './component/newsMVS';
export function NewsMV(){
    return(
        <>
        <Nav></Nav>
        <NavDesktop></NavDesktop>
        <MVNewsHeader />
        <MVNewsM />
        <MVNewsS />
        </> 
    )

}