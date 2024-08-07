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
                        <Link to='/'><p className='navbar_font'>Example</p></Link>
                    </li>
                    <li className="navbar_link">
                        <Link to='/exampleone'><p className='navbar_font'>Example one</p></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}