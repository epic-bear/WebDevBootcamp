const img1 = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];
const resume = document.querySelector("h1");

function randomNumber() {
    return Math.ceil(Math.random() * 6);
}

var player1 = randomNumber();
var player2 = randomNumber();

img1.setAttribute("src", "./images/dice" + player1 + ".png");
img2.setAttribute("src", "./images/dice" + player2 + ".png");

if (player1 > player2) {
    resume.innerText = "Player 1 Wins";
}
else if (player1 < player2) {
    resume.innerText = "Player 2 Wins";
}
else {
    resume.innerText = "Draw!";
}
