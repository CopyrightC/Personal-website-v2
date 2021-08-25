import React from 'react'
import "../styles/home.css"
import { Input } from "./input"
export const Home = () => {

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

