import './App.css';
import React from 'react';
import { Home } from "./components/home"
function App() {

  const addMsg = (Message) => {
    let main_div = document.getElementById("window")
    let msg = document.createElement("p")
    msg.className = "command"
    let text = document.createTextNode(Message)
    msg.appendChild(text)
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
        if (value === "!help") {
          addMsg("You ts")

        }

        else {

        }
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
