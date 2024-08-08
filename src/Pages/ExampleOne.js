import React from "react";

import "./ExampleOne.css"

import Navbar from "../Navbar";

import image from "./Images/unnamed.png"
export default function ExampleOne(){
    return(
        <>
            <Navbar />
            <div id="exampleone">
<a href="https://www.w3schools.com"><img id="exampleone_img1" src={image}/></a>
<a href="https://www.youtube.com/watch"><img id="exampleone_img1" src={image}/></a>
<a href="https://www.figma.com/design/bRoff6hjGeOxo9cJtAAcI2/Bisney%2B?node-id=73-2&t=yT5Uka53s95E9qMv-0"><img id="exampleone_img1" src={image}/></a>
            </div>
        </>
    )
}