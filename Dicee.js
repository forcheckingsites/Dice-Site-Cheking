
var randomNumber1=Math.floor(Math.random()*6+1);

var randomDice = "images/dice" + randomNumber1 + ".png";

var image1=document.querySelectorAll("img")[0];


document.querySelectorAll("img")[0].setAttribute("src", randomDice);




var randomNumber2=Math.floor(Math.random()*6+1);

var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins";
}

else {
    document.querySelectorAll("h1")[0].innerHTML ="Draw!";
}