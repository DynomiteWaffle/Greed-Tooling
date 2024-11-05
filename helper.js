let log = [0]
let numbers = []
let numberLog = [0]
let run = 0
// imports game function
async function getRules() {
    // TODO load remote js
    // console.log(document.getElementById("jsSrc").value)
    if (document.getElementById("jsSrc").value.length == 0) {
        document.getElementById("jsSrc").value = 'https://raw.githubusercontent.com/DynomiteWaffle/Greed-Tooling/refs/heads/main/greed.js'
    }


    let message
    try {
        const res = await fetch(document.getElementById("jsSrc").value)
        message = res
    } catch {
        // bad res
        console.log("failed getting file")
        return
    }
    // file not js
    if (message.headers.get('content-type') == 'application/javascript') {
        eval(await message.text())// run js
    } else {
        console.log("not js file trying anyway")
        // try anyway because github doesn't have good headers
        try {
            eval(await message.text())// run prob js
        } catch {
            console.log("not js file")
            return
        }
        
    }
    init() //initilize new rules
    document.getElementById("start").hidden = true
    document.getElementById("game").hidden = false
    updateVisuals()
}


// generates x buttons
function genButtons(functions) {
    let loop = 0
    functions.forEach(element => {
        loop++
        const n = loop
        let b = document.createElement("button")
        b.innerText = loop
        b.className = "DiceButton"
        b.addEventListener('click', () => {
            element();
            logDetailedLog("button "+n+" pressed, score "+log[log.length-1])
        });
        document.getElementById("buttons").appendChild(b)
    });

}

function undo() {
    let p
    // remove 1 if 1 can be removed
    if (log.length > 1) {
        p = log.pop()
        logDetailedLog("Undo, now run "+(run)+" score "+log[log.length-1])
    }
    if (p == 0 && log.length >0) { run-- }//undo a run
    updateVisuals()

}
function newRun() {
    logDetailedLog("New run, now run "+(run+2))
    run++
    log[log.length] = 0
    updateVisuals()
}

function setScore(score) {
    log[log.length] = score
    updateVisuals()// update html info
}
function score() {
    return log[log.length-1]
}

function updateVisuals() {
    document.getElementById("score").innerText = log[log.length - 1]
    document.getElementById("run").innerText = run + 1
}

//Detailed Log
function logDetailedLog(message) {
    let log = document.getElementById("log").innerText
    document.getElementById("log").innerText = message +"\n"+log
}

