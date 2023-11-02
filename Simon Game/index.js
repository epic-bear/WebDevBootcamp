var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.ceil(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}
