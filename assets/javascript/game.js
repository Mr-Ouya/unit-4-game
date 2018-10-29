$(document).ready(function () {
   
    var playerScore = 0;
    var losses = 0;
    var wins = 0;
//Make and display random number

    var randomNum = Math.floor(Math.random() * 100) + 19
    $("#randNum").html(randomNum)
   
    var blueNum = Math.floor(Math.random() * 10) + 1
    var pinkNum = Math.floor(Math.random() * 10) + 1
    var greenNum = Math.floor(Math.random() * 10) + 1
    var yellowNum = Math.floor(Math.random() * 10) + 1



    var reset = function() {
        randomNum = Math.floor(Math.random() * 100) + 19
        $("#randNum").html(randomNum)
       
        blueNum = Math.floor(Math.random() * 10) + 1
        pinkNum = Math.floor(Math.random() * 10) + 1
        greenNum = Math.floor(Math.random() * 10) + 1
        yellowNum = Math.floor(Math.random() * 10) + 1
        
    
        playerScore = 0;
        $("#score").html(playerScore)
    }

    $("#score").html(playerScore)
    $("#wins").html(wins)
    $("#losses").html(losses)


    $("#blueCrystal").on("click", function () {
        playerScore += parseInt(blueNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            wins++
            $("#winsCounter").html(wins)
            reset()

        }
        if (playerScore > randomNum) {
            losses++
            $("#lossesCounter").html(losses)
            reset()
        }
    })

    $("#pinkCrystal").on("click", function () {
        playerScore += parseInt(pinkNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            wins++
            $("#winsCounter").html(wins)
            reset()
        }
        if (playerScore > randomNum) {
            losses++
            $("#lossesCounter").html(losses)
            reset()
        }
    })

    $("#redCrystal").on("click", function () {
        playerScore += parseInt(greenNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            wins++
            $("#winsCounter").html(wins)
            reset()

        }
        if (playerScore > randomNum) {
            losses++
            $("#lossesCounter").html(losses)
            reset()
        }
    })

    $("#yellowCrystal").on("click", function () {
        playerScore += parseInt(yellowNum)
        $("#score").html(playerScore)
        if (playerScore === randomNum) {
            wins++
            $("#winsCounter").html(wins)
            reset()
        }
        if (playerScore > randomNum) {
            losses++
            $("#lossesCounter").html(losses)
            reset()
        }
    })

})