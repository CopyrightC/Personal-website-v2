import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import { Input } from "./input"
export const Home = () => {

    const [max, setMax] = useState(false);
    useEffect(() => {
        let head = document.getElementById("buttons")
        let window = document.getElementById("window")
        let input = document.getElementById("input")
        if (max) {
            window.setAttribute("style", `
            width: 100vw;
            height:100%;
        `)

            head.setAttribute("style", `width:100%`)

            input.setAttribute("style", "width:100vw")

        }
        else {
            window.setAttribute("style", `
        width: 85vw;
        height:85vh;
        `)
            input.setAttribute("style", "width:85vw")
            head.setAttribute("style", "width:85vw")
        }
    }, [max])

    return (
        <div className="home-main">
            <div id="buttons">
                <button className="img-hldr" >
                    <img className="img" src="https://image.flaticon.com/icons/png/512/864/864393.png" alt="" />
                </button>
                <button className="img-hldr" onClick={() => setMax(!max)}>
                    <img src="https://image.flaticon.com/icons/png/512/136/136831.png" alt="" className="img" />
                </button>
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

