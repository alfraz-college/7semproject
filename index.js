var totalButtons = document.querySelectorAll(".drum").length;
var song = document.getElementById("song_audio");

for(var i = 0; i < totalButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  
    var keyName = this.innerHTML;

    playSound(keyName);

    playAnimation(keyName);

  });
}

document.addEventListener("keypress", function(event) {
  
  playSound(event.key);

  playAnimation(event.key);

});



function playSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio('sounds/ride.mp3');
      tom4.play();
      break;

    case "g":
      var tom4 = new Audio('sounds/hi-hat-open.mp3');
      tom4.play();
      break;
    
    case "h":
      var tom4 = new Audio('sounds/hi-hat-closed.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/kick-bass.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/snare.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/crash.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}

function playAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
