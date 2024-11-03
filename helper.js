let log = [0]
let numbers = []
let numberLog = [0]
let run = 0
// imports game function
function getRules() {
    // TODO load remote js
    // TODO if remote fails load default
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
        b.addEventListener('click', () => {
            element();
            logDetailedLog(n+" button pressed, score "+log[log.length-1])
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

