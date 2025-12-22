dice = [
    // 1
    function () {
        if (game >= 2) {
            score += 100
        }
        else {
            score += 1
        }

    },
    // 2
    function () {
        if (game >= 1) {
            // doubble or 2
            if (score == 0) {
                score += 2
            } else {

                score *= 2
            }
        }
        else {
            score += 2
        }
    },
    // 3
    function () {
        score += 3
    },
    // 4
    function () {
        if (score == 0) {
            score += 4
        } else {
            run++
            score = 0
        }
    },
    // 5
    function () {
        if (game >= 2) {
            score += 50
        }
        else {
            score += 5
        }
    },
    // 6
    function () {
        score += 6
    },
]

/*
round 0 4 kills
round 1 2 doubles
round 2 5 fifties
round 3 1 one hundred
*/
