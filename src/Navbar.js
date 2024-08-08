import React from "react";
import {Link} from 'react-router-dom'

import "./Navbar.css"

export default function Navbar(){
    return(
        <>
            <div id="navbar">
                <div id="navbar_logo"/>
                <ul id="navbar_links">
                    <li className="navbar_link">
                        <Link to='/'><p className='navbar_font'>Race game</p></Link>
                    </li>
                    <li className="navbar_link">
                        <Link to='/exampleone'><p className='navbar_font'>Google premium</p></Link>
                    </li>
                    <li className="navbar_link">
                        <Link to='/bisneyblus'><p className='navbar_font'>Bisney Blus</p></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}