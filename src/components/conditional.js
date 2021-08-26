let reload = false;
export const conditionalOutput = (addMsg, value) => {
    if (reload) {
        if (value === "y") {
            window.location.reload(true)
        }
        else {
            addMsg(`webTerminal@home:~$ ${value}`, true)
            addMsg(">>>Command terminated")
        }
        reload = false;
    }
    else {

        if (value === "!help") {
            addMsg(`webTerminal@home:~$ ${value}`, true)
            addMsg(
                `>>>Here's a list of valid commands : ${"\n"} ${"\n"} 
1. !projects - gives description of some my projects ${"\n"}
2. cd gui - switches to GUI version ${"\n"}
3. !whoami - Get to know me! ${"\n"}
4. !clear - clears window ${"\n"}
5. !github - redirects to my github account${"\n"}
6. !so - redirects to my stackoverflow account ${"\n"}
7. !discord - Wanna talk to me?${"\n"}
8. !r - reloads the website${"\n"}
9. !src - redirects to github repository of this website`
            )
        }

        else if (value === "!clear") {
            let window = document.getElementById("window")
            window.textContent = ''
            addMsg(`CopyrightC's Terminal
    Hi! On the internet I'm known as CopyrightC
    Type !help for more info${"\n"}`, false, true)
        }

        else if (value === "!r") {
            addMsg(`webTerminal@home:~$ ${value}`, true)
            addMsg(">>>Are you sure you want to reload the window?(y/n)")
            reload = true
        }

        else if (value === "!whoami") {
            addMsg(`webTerminal@home: ~$ ${value} `, true)
            addMsg(`Hello, my name is ...(secret, you can call me CopyrightC)
On the internet, I'm known as Copyright(C), quite weird huh?`)
        }

        //link commands 

        else if (value === "!src") {
            addMsg("Opening https://github.com/SATAN01/Personal-website-v2/ ...")
            window.open("https://github.com/SATAN01/Personal-website-v2/", "_blank")
            addMsg("Successfully opened")
        }

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

        else if ((value === "hi") || (value === "hello") || (value === "hey")) {
            addMsg(`webTerminal@home: ~$ ${value} `, true);
            addMsg("Hey :)")
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
            try {
                let x = eval(value)
                addMsg(`webTerminal@home: ~$ ${value} `, true)
                addMsg(`>>>${x}`)
            }
            catch {
                addMsg(`webTerminal@home: ~$ ${value} `, true)
                addMsg(">>>Invalid command", false, false, true)
            }
        }
    }
}