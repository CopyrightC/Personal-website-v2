import React from 'react'
import "../styles/home.css"

export const Home = () => {

    return (
        <div className="home-main">

            <div className="window">
                <div className="buttons">
                    <img className="img" src="https://image.flaticon.com/icons/png/512/864/864393.png" alt="" />
                    <img src="https://image.flaticon.com/icons/png/512/136/136831.png" alt="" className="img" />
                </div>
                <p className="command">
                    Windows PowerShell
                    <br />
                    Copyright (C) Microsoft Corporation. All rights reserved.
                    <br />
                    Try the new cross-platform PowerShell https://aka.ms/pscore6
                </p>
                <div className="main-input-area">
                    <p className="command" id="location">copyrightc@personalWebsite:~/home$</p>
                    <span contentEditable={true} id="input">dasd</span>
                </div>
            </div>
        </div>
    )
}
