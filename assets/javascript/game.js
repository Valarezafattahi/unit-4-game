// window.onload = function() {
//     if (window.jQuery) { 
//         alert("Yeah!");
//     } else {
//         alert("Doesn't Work");
//     }
// }

// randomly selecting a number between 19 and 120
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomNum = randomNumber(19, 120);
console.log(randomNum);
$("#rn").html(randomNum);
var playerScore = 0;
var wins = 0;
var losses = 0;
var cr1 = 0;
var cr2 = 0;
var cr3 = 0;
var cr4 = 0;
var crystalArray = [];
$("#pS").html(playerScore);
$("wins").html(wins);
$("#lose").html(losses);
//we wont get a same value on two or more crystals 
for (var i = 0; i < 4; i++) {
    var tempCr = 1 + Math.floor(Math.random() * 12);
    console.log("original number: " + tempCr);
    while (crystalArray.indexOf(tempCr) != -1) {
        tempCr = 1 + Math.floor(Math.random() * 12);
        console.log("new number: " + tempCr);
    }
    crystalArray.push(tempCr);
}

cr1 = crystalArray[0];
cr2 = crystalArray[1];
cr3 = crystalArray[2];
cr4 = crystalArray[3];


// if (cr1===cr2 || cr1===cr3 || cr1===cr4 ) { 
//     var cr1= 1+ Math.floor(Math.random()*12);
// }   
// else if (cr2===cr3 || cr2===cr4) {
//     var cr2= 1+ Math.floor(Math.random()*12);
// }   
// else if (cr3===cr4) {
//     var cr3= 1+ Math.floor(Math.random()*12);
// } 

// if (cr1===cr2 || cr1===cr3 || cr1===cr4 ) { 
//     var cr1= 1+ Math.floor(Math.random()*12);
// }   
// else if (cr2===cr3 || cr2===cr4) {
//     var cr2= 1+ Math.floor(Math.random()*12);
// }   
// else if (cr3===cr4) {
//     var cr3= 1+ Math.floor(Math.random()*12);
// } 

console.log(cr1, cr2, cr3, cr4);

// reset var

var reset = function () {
    playerScore = 0;
    randomNum = randomNumber(19, 120);
    var cr1 = 1 + Math.floor(Math.random() * 12);
    var cr2 = 1 + Math.floor(Math.random() * 12);
    var cr3 = 1 + Math.floor(Math.random() * 12);
    var cr4 = 1 + Math.floor(Math.random() * 12);
    $('#rn').html(randomNum);
    $('#pS').html(playerScore);
    $("wins").html(wins);
    $("#lose").html(losses);
}
// winning / losing conditions 
var winCheck = function () {
    if (playerScore == randomNum) {
        wins++;
        alert("You Won!")
        $("#wins").html(wins);
        reset();
    } else if (playerScore > randomNum) {
        losses++;
        alert("You Lost!");
        $("#losses").html(losses);
        reset();
    }
}

// function to adding up the the crystal's score to pS
$("#cr1").on("click", function () {
    playerScore = playerScore + cr1;
    $('#pS').html(playerScore);
    winCheck();
})

$("#cr2").on("click", function () {
    playerScore = playerScore + cr2;
    $('#pS').html(playerScore);
    winCheck();
})

$("#cr3").on("click", function () {
    playerScore = playerScore + cr3;
    $('#pS').html(playerScore);
    winCheck();
})

$("#cr4").on("click", function () {
    playerScore = playerScore + cr4;
    $('#pS').html(playerScore);
    winCheck();
})