var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

$(document).keypress(function (e) {
  nextSequence();
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.ceil(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
