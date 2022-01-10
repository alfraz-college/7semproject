var mySound = new buzz.sound("sounds/crash", {
  formats: ["mp3"],
  preload: true,
  autoplay: false,
  loop: false
});

  // mySound.play();
  document.getElementById("spare").addEventListener("click", function () {
    var aud = new Audio("sounds/crash.mp3");
    aud.play();
  });

var totalButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < totalButtons; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function () {
  if (this.innerHTML == "w")
  {var audio = new Audio("sounds/tom-1.mp3");}
  else if (this.innerHTML == "a")
  {var audio = new Audio("sounds/tom-2.mp3");}
  else if (this.innerHTML == "s")
  {var audio = new Audio("sounds/tom-3.mp3");}
  else if (this.innerHTML == "d")
  {var audio = new Audio("sounds/tom-4.mp3");}
  else if (this.innerHTML == "j")
  {var audio = new Audio("sounds/kick-bass.mp3");}
  else if (this.innerHTML == "k")
  {var audio = new Audio("sounds/snare.mp3");}
  else if (this.innerHTML == "l")
  {var audio = new Audio("sounds/crash.mp3");}

  audio.play();
});
}

document.addEventListener("keypress", function(event) {
  if (event.key == "w")
  {var audio = new Audio("sounds/tom-1.mp3"); audio.play();}
  else if (event.key == "a")
  {var audio = new Audio("sounds/tom-2.mp3"); audio.play();}
  else if (event.key == "s")
  {var audio = new Audio("sounds/tom-3.mp3"); audio.play();}
  else if (event.key == "d")
  {var audio = new Audio("sounds/tom-4.mp3"); audio.play();}
  else if (event.key == "j")
  {var audio = new Audio("sounds/kick-bass.mp3"); audio.play();}
  else if (event.key == "k")
  {var audio = new Audio("sounds/snare.mp3"); audio.play();}
  else if (event.key == "l")
  {var audio = new Audio("sounds/crash.mp3"); audio.play();}
});
