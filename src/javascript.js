import sleepingsound from "./assets/snore.mp3";
import audiosound from "./assets/snore.mp3";
import jumpscaresound from "./assets/jumpscaresound.mp3";

function gameEnded() {
  sleepingsound.pause();
  audiosound.pause();
  jumpscaresound.play();
  var but = document.getElementById("Endgame");
  but.style.display = "block";
  clearInterval(downloadTimer);
  var take = document.getElementById("Gameatas");
  var bonehide = document.getElementById("bones");
  var steal = document.getElementById("steal");
  bonehide.style.display = "none";
  take.style.display = "none";
  steal.style.display = "none";
  var gambar = document.getElementById("anjing");
  gambar.setAttribute("src", "assets/scarydwg.jpeg");
  gambar.style.animation = "shake 0.5s";
}

export default gameEnded;
