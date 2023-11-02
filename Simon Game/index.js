var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = nextSequence();
var randomChosenColor = buttonColors[randomNumber];
function nextSequence() {
  return Math.ceil(Math.random() * 4);
}
