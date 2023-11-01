var drums = document.querySelectorAll(".drum");
var sound = new Audio("sounds/tom-1.mp3");
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var buttoninnerHTML = this.innerHTML;
    buttonAnimation(buttoninnerHTML);
    makeSound(buttoninnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  buttonAnimation(event.key);
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/crash.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/snare.mp3").play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
