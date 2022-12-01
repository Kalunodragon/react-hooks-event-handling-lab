// Code Keypad Component Here
import React from "react";

function handleChange(e){
    e.preventDefault()
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input onChange={(e)=>handleChange(e)}type="password" />
        </div>
    )
}

export default Keypad;