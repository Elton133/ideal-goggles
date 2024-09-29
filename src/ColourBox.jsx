import { useState } from "react";
import "./ColourBox.css";

export default function ColourBox(){
    const [color, setColor] = useState("255,255,255");

    function changeColor(){
       const r = Math.floor((Math.random ()* 255) + 1) 
       const g = Math.floor((Math.random ()* 255) + 1) 
       const b = Math.floor((Math.random ()* 255) + 1)  

    }

    return(
        
        <>
        <div onClick={changeColor}
        style={{backgroundColor: `rgb(${color})`, width:'100px', height:'100px'}}></div>
        </>
    )
}