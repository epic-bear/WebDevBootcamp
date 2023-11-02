var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = nextSequence();
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

function nextSequence() {
  return Math.ceil(Math.random() * 4);
}
