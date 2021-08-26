import React, { useEffect, useState } from 'react'
import "../styles/home.css"
import { Input } from "./input"
import { conditionalOutput } from './conditional';

export const Home = () => {
    React.useEffect(() => {
        let input = document.getElementById("input")
        input.focus();
        input.addEventListener('keypress', (e) => {
            if (e.code === "Enter") {

                let value = input.value
                e.preventDefault()
                input.value = ""
                conditionalOutput(addMsg, value);
            }
        })
    })

    const addMsg = (Message, locationId = false, clear = false, error = false) => {

        let main_div = document.getElementById("window")
        let msg = document.createElement("p")
        msg.className = "maxwi"
        let _pre = document.createElement("pre");
        let text = document.createTextNode(Message)
        if (locationId) {
            _pre.className = "location"
        }
        else {
            _pre.style = "font-family: fira code"
            if (clear) {
                _pre.className = "command"
            }
            else {
                if (error) { _pre.className = "error-msg" }

                else { _pre.className = "output" }
            }
        }

        _pre.appendChild(text);
        msg.appendChild(_pre)
        main_div.appendChild(msg)

    }

    const [max, setMax] = useState(false);
    useEffect(() => {
        let head = document.getElementById("buttons")
        let window = document.getElementById("window")
        let input = document.getElementById("input")
        let maxBtn = document.getElementById("max")
        if (max) {
            window.setAttribute("style", `
            width: 100vw;
            height:100%;
        `)

            head.setAttribute("style", `width:100%`)
            maxBtn.setAttribute("src", "https://image.flaticon.com/icons/png/512/109/109724.png")
            input.setAttribute("style", "width:100vw")

        }
        else {
            window.setAttribute("style", `
        width: 85vw;
        height:85vh;
        `)
            maxBtn.setAttribute("src", "https://image.flaticon.com/icons/png/512/136/136831.png")
            input.setAttribute("style", "width:85vw")
            head.setAttribute("style", "width:85vw")
        }
    }, [max])

    return (
        <div className="home-main">
            <div id="buttons">
                <button className="img-hldr" onClick={() => setMax(!max)}>
                    <img id="max" src="https://image.flaticon.com/icons/png/512/136/136831.png" alt="" className="img" />
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

