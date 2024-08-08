import React from "react";
import {Link} from 'react-router-dom'

import "./Navbar.css"

import gimage from "./Pages/Images/Google__G__logo.svg.png"

export default function Navbar(){
    return(
        <>
            <div id="navbar">
                <img id="navbar_logo" src={gimage}/>{/*  />*/}
                <ul id="navbar_links">
                    <li className="navbar_link">
                        <Link to='/'><p className='navbar_font'>Bisney Blus</p></Link>
                    </li>
                    <li className="navbar_link">
                        <Link to='/exampleone'><p className='navbar_font'>Google Premium</p></Link>
                    </li>
                    <li className="navbar_link">
                        <Link to='/racegame'><p className='navbar_font'>race game</p></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}