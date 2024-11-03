function init() {
    let dice = [
        // 1
        function () {
            if (run >= 2) {
                add(100)
            }
            else {
                add(1)
            }
            
        },
        // 2
        function () {
            if (run >= 1) {
                // doubble or 2
                if (score() == 0) {
                    add(2)
                } else {
                    let s = score()
                    s*=2
                    setScore(s)
                }
            }
            else
            {
                add(2)
            }
        },
        // 3
        function() {
            add(3)
        },
        // 4
        function () {
            newRun()
        },
        // 5
        function () {
            if (run >= 2) {
                add(50)
            }
            else {
                add(5)
            }
        },
        // 6
        function () {
            add(6)
        },
    ]
    genButtons(dice)
   
}

function add(num) {
    let s = score()
    s+=num
    setScore(s)
}
 
/*
round 0 4 kills
round 1 2 doubles
round 2 5 fifties
round 3 1 one hundred
*/
