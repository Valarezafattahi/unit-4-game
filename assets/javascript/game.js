// window.onload = function() {
//     if (window.jQuery) { 
//         alert("Yeah!");
//     } else {
//         alert("Doesn't Work");
//     }
// }

// randomly selecting a number between 19 and 120
var randomNumber = 19 + Math.floor(Math.random()*100);
$("#rn").text(randomNumber);
console.log(randomNumber);
