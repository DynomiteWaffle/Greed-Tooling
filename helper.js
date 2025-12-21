let dice = []
let log = []
let score = 0
let run = 0
let game = 0
genLog()



// startup pram game

let params = new URLSearchParams(document.location.search);
let url = params.get("rules")
if (url == null) { url = "greed.js" }
getRules()


// imports game function
async function getRules() {
    console.log("Getting rules")
    let message
    try {
        const res = await fetch(url)
        message = res
    } catch {
        // bad res
        console.log("failed getting file")
        return
    }
    // file not js
    if (message.headers.get('content-type') == 'application/javascript') {
        // INFO runs custom js rules here
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
    updateVisuals()
}
function undo() {
    if (log.length > 1) {
        log.pop()
    }

    // update()
    updateVisuals()

}
function newGame() {
    game++
    run = 0
    score = 0
}
function newRun() {
    run++
    score = 0
}

function updateVisuals() {
    sync()
    document.getElementById("score").innerText = score
    document.getElementById("run").innerText = run + 1
    document.getElementById("game").innerText = game + 1
}
function sync() {
    let obj = log.pop()
    score = obj.score
    game = obj.game
    run = obj.run
    log.push(obj)
}

function genLog() {
    let obj = {}
    obj.score = score
    obj.game = game
    obj.run = run
    log.push(obj)
}

function buttonPressed() {
    genLog()
    updateVisuals()
}