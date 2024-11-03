let log = [0]
let run = 0
// imports game function
function getRules() {
    // TODO load remote js
    // TODO if remote fails load default
    init() //initilize new rules
    document.getElementById("start").hidden = true
    document.getElementById("game").hidden = false
}


// generates x buttons
function genButtons(functions) {
    let loop = 0
    functions.forEach(element => {
        loop++
        let button = document.createElement("button")
        button.innerText = loop
        button.addEventListener('click', () => {
            element();
        });
        document.getElementById("buttons").appendChild(button)
    });

}

function undo() {
    log.pop()
    log[0] = 0 // start of log always 0
    updateVisualScore()
}
function newRun() {
    run++
    log = [0]
    updateVisualScore()
}

function setScore(score) {
    // console.log(score)
    log[log.length + 1] = score
    // update html info
    // console.log(log[log.length])
    updateVisualScore()
}
function score() {
    return log[log.length-1]
}

function updateVisualScore() {
    document.getElementById("score").innerText = log[log.length - 1]
    document.getElementById("run").innerText = run
}