var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = nextSequence();
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$("#" + randomChosenColor). fadeOut(100).fadeIn(100);

function nextSequence() {
  return Math.ceil(Math.random() * 4);
}
