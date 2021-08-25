import React, { useEffect } from 'react'
import "../styles/home.css"
import { Input } from "./input"
export const Home = () => {

    const addMsg = (Message) => {
        let main_div = document.getElementById("window")
        console.log(main_div)
        let msg = document.createElement("p")
        msg.className = "command"
        let text = document.createTextNode(Message)
        msg.appendChild(text)
        main_div.appendChild(msg)
    }



    const focus = () => {
        let input = document.getElementById("input")
        input.focus();
    }
    return (
        <div className="home-main">
            <div className="buttons">
                <img className="img" src="https://image.flaticon.com/icons/png/512/864/864393.png" alt="" />
                <img src="https://image.flaticon.com/icons/png/512/136/136831.png" alt="" className="img" />
            </div>
            <div id="window">
                <p className="command">
                    CopyrightC's Terminal
                    <br />
                    Hi! On the internet I'm known as CopyrightC
                    <br />
                    Type !help for more info
                </p>


            </div>
            <Input />
        </div >
    )
}

