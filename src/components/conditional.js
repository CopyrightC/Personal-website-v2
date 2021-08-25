export const conditionalOutput = (addMsg, value) => {

    if (value === "!help") {
        addMsg(`webTerminal@home:~$ ${value}`, true)
        addMsg(`>>>Here's a list of valid commands :`)
        addMsg(`1. !projects - gives description of some my projects`)
        addMsg(`2. cd gui - switches to GUI version`)
        addMsg(`3. !whoami - Get to know me!`)
        addMsg(`4. !clear - clears window`)
        addMsg(`5. !github - redirects to my github account`)
        addMsg(`6. !so - redirects to my stackoverflow account`)
        addMsg(`7. !discord - Wanna talk to me?`)
        addMsg(`8. !r - reloads the website`)
    }
    else if (value === "!clear") {
        let window = document.getElementById("window")
        window.textContent = ''
        addMsg("CopyrightC's Terminal" + "\n" +
            "Hi! On the internet I'm known as CopyrightC" + "\n" +
            "Type !help for more info" + "\n", false, true)
    }

    else if (value === "!r") { window.location.reload(true) }

    else if (value === "!whoami") {
        addMsg(`webTerminal@home: ~$ ${value} `, true)
        addMsg("Hello, my name is ...(secret, you can call me CopyrightC) " + "\n" +
            "I'm a 14 year old boy. I'm a student and currently learning React native." + "\n" +
            "On the internet, I'm known as Copyright(C), quite weird huh?")
    }

    //link commands 

    else if (value === "!projects") {
        addMsg("Opening https://copyrightc.netlify.app/#text ...")
        window.open("https://copyrightc.netlify.app/#text", "_blank")
        addMsg("Successfully opened")
    }

    else if (value === "!github") {
        addMsg(`webTerminal@home: ~$ ${value} `, true)
        addMsg(">>>Opening https://github.com/SATAN01 in a new tab...")
        window.open("https://github.com/SATAN01", "_blank")
        addMsg("Successfully opened")
    }
    else if (value === "!so") {

        addMsg(`webTerminal@home: ~$ ${value} `, true);
        addMsg("https://stackoverflow.com/users/13845215/copyrightc in a new tab...")
        window.open("https://stackoverflow.com/users/13845215/copyrightc", "_blank");
        addMsg("Successfully opened")
    }
    else if (value === "cd gui") {
        addMsg("changed dir to gui")
        window.open("https://copyrightc.netlify.app/", "_blank");

    }
    else if (value === "!discord") {
        addMsg(`webTerminal@home: ~$ ${value} `, true);
        addMsg("Redirecting to discord ...")
        window.open("https://discord.com/users/510444035349938186", "_blank")
        addMsg("Successfully opened")
    }
    else {
        addMsg(`webTerminal@home: ~$ ${value} `, true)
        addMsg(">>>Invalid command")
    }
}