// VARIABLES
var randomResult;
var lost = 0; 
var win = 0;
var score = 0;

// STARTGAME FUNCTION
var startAndResetGame = function () {

    $(".crystals").empty();

    // FUNCTION FOR VARIABLE 
    randomResult = Math.floor(Math.random() * 90  + 30);
    // console.log(randomResult);

    // JQUERY CODE FOR LINKING HTML "RANDOM RESULTS" TO VAR RANDOMRESULT 
    $("#result").html (' ' + randomResult);

    // VARIABLE FOR LOOP
    for(var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11 + 1);
        // console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', "dataRandom": random
            });
            // crystal.css({
            //     "background-image":"url('" + images[i] + "')",
            //     "background-size":"cover"
            // });
            // GIVES ME THE NUMBER IN THE CRYSTAL BOX // DELETE THIS
            // crystal.html(random); HIDE THE NUMBERS IN THE CRYSTAL BOX // DELETE THIS

        $(".crystals").append(crystal);
   
    }
    
    $("#score").html("TOTAL SCORE: " + score);
};
// START GAME
startAndResetGame();


// FUNCTION FOR GENERATING RANDOM NUMBER FOR CRYSTAL
$(document).on('click', ".crystal",  function() {
    // console.log($(this).attr('dataRandom'));

    // VARIABLE GENERATING RANDOM NUMBER WHEN CRYSTAL IS CLICKED
    var num = parseInt ($(this).attr('dataRandom'));

    score += num;
    console.log(score);

    $("#score").html(score); 
    if (score > randomResult) {
        lost++;
        $("#losses").html("Losses: " + lost);
        score = 0;

        $("#score").html("TOTAL SCORE: " + score);

        startAndResetGame();
        // console.log("You Lose!");
    }
    else if(score === randomResult) {
        win++;
        $("#wins").html("Wins: " + win);
        score = 0;

        startAndResetGame();
        // console.log("You WIN!");
    }

});