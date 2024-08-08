import React from "react";

import "./Example.css"

import Navbar from "../Navbar";

import image1 from "./Images/Image1.png"
export default function Example(){
    return(
        <>
            <Navbar />
            <div id="example">
                <a href="https://www.figma.com/design/bRoff6hjGeOxo9cJtAAcI2/Bisney%2B?node-id=73-2&t=yT5Uka53s95E9qMv-0"><img id="exampleone_img1" src={image1}/></a>
            </div>
        </>
    )
}