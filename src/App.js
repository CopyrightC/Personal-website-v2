import './App.css';
import React from 'react';
import { Home } from "./components/home"
import { conditionalOutput } from './components/conditional';

function App() {

  const addMsg = (Message, locationId = false, clear = false) => {

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
        _pre.className = "output"
      }
    }

    _pre.appendChild(text);
    msg.appendChild(_pre)
    main_div.appendChild(msg)
  }

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

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;