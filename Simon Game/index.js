var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).keypress(function (e) {
  if (e.key === "a" && !started) {
    started = true;
    nextSequence();
  }
});

$(".btn").click(function () {
  if (started) {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(level - 1);
  }
});

function nextSequence() {
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
  $("h1").text("Level " + level);
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

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  } else {
    finishTheGame();
  }
}

function finishTheGame() {
  new Audio("sounds/wrong.mp3").play();
  $("h1").text("Game Over");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("h1").text("Press A Key to Start");
    $("body").removeClass("game-over");
  }, 1000);
  setTimeout(function () {
    startOver();
  }, 1000);
}

function startOver() {
  $("h1").text("Press A Key to Start");
  level = 0;
  started = false;
  gamePattern = [];
  userClickedPattern = [];
}
