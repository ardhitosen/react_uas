import "bootstrap/dist/css/bootstrap.min.css";
import dog from "./assets/dog.png";
import jumpscare from "./assets/jumpscare.mp3";
import gamemusicmenu from "./assets/gamemusicmenu.mp3";
import tulang from "./assets/Tulang.png";
import snore from "./assets/snore.mp3";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import clicksfx from "./assets/clicksfx.mp3";
import "./stylegame.css";

function Games() {
  let bones = [];
  // const [bones, setBones] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [icon, setIcon] = useState(null);
  const [clickedImage, setClickedImage] = React.useState(null);
  const [playerTurn, setPlayer] = useState("st");
  const [time, setTime] = useState(10);
  const [count, setCount] = useState(1);
  const location = useLocation();
  const passData = location.state;
  const navigate = useNavigate();
  const bgcolor = passData.background;
  const [audioGambar, setAudioGambar] = useState(
    "https://img.icons8.com/material-rounded/24/null/no-audio--v2.png"
  );
  const [audio, setAudio] = useState(true);
  const randomnumber =
    Math.floor(Math.random() * passData.playerAmount * 4) + 1;
  const [zonkImage, setZonkImage] = useState(randomnumber);
  const navigateHome = () => {
    navigate("/");
  };

  for (let i = 0; i < passData.playerAmount * 4; i++) {
    bones.push(
      <div>
        <img
          src={tulang}
          alt="bones"
          id={i + 1}
          style={{ width: "50%", display: "" }}
          onClick={handleClick}
        />
      </div>
    );
  }

  function gameHabis() {
    document.getElementById("audio").pause();
    document.getElementById("sleep").pause();
    document.getElementById("gamesemua").style.display = "none";
    document.getElementById("Endgame").style.display = "";
    document.getElementById("jumpscare").play();
  }

  function audioClick() {
    if (audio === true) {
      setAudio(false);
      setAudioGambar(
        "https://img.icons8.com/material-rounded/24/null/no-audio--v1.png"
      );
      document.getElementById("audio").pause();
      document.getElementById("sleep").pause();
    } else if (audio === false) {
      setAudio(true);
      setAudioGambar(
        "https://img.icons8.com/material-rounded/24/null/no-audio--v2.png"
      );
      document.getElementById("audio").play();
      document.getElementById("sleep").play();
    }
  }

  function handleClick(event) {
    // event.target.style.display = "none";
    document.getElementById("click").play();
    setTime(10);
    setCount(count + 1);
    if (count === passData.playerAmount) {
      setCount(1);
    }
    const id = event.target.id;
    document.getElementById(id).style.display = "none";

    if (id == zonkImage) {
      gameHabis();
    }

    var newPlayer = "";
  }
  useEffect(() => {
    if (passData.weather === "Clear") {
      setIcon("https://img.icons8.com/ios/100/null/sun--v1.png");
    } else if (passData.weather === "Clouds") {
      setIcon(
        "https://img.icons8.com/external-simple-line-edt.graphics/100/null/external-Clouds-weather-simple-line-edt.graphics.png"
      );
    } else {
      setIcon("https://img.icons8.com/ios/100/null/torrential-rain--v2.png");
    }
    document.body.style.backgroundColor = bgcolor;
    document.getElementById("audio").play();
    document.getElementById("sleep").play();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time === 0) {
        gameHabis();
      } else {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <audio id="audio">
        <source src={gamemusicmenu} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio id="sleep">
        <source src={snore} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio id="jumpscare">
        <source src={jumpscare} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio id="click" loop={false}>
        <source src={clicksfx} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div class="container-fluid">
        <img
          src={icon}
          alt="Cuaca"
          style={{ width: "10%", float: "right", marginLeft: "5%" }}
        />
        <img
          src="https://img.icons8.com/pastel-glyph/64/null/circled-left.png"
          alt="panah"
          id="back"
          style={{
            width: "5%",
            float: "left",
            marginRight: "10%",
            marginTop: "2%"
          }}
          onClick={navigateHome}
        />
        <h2 class="display-4" style={{ textAlign: "center" }}>
          Don't Take Spike's Bones
        </h2>
        <img src={dog} alt="doggy" class="img-fluid" id="logo" />
        <hr />
      </div>
      <div id="gamesemua" style={{ display: "" }}>
        <div id="Gameatas">
          <img
            src={audioGambar}
            alt="Mute"
            style={{ width: "3%" }}
            id="volume"
            onClick={audioClick}
          ></img>
          <h4
            id="play-turn"
            style={{
              marginLeft: "3%",
              fontFamily: "helvetica",
              fontWeight: "bold"
            }}
          >
            Turns: Player {count}
          </h4>
          <h4
            id="countdown"
            style={{
              marginLeft: "3%",
              fontFamily: "helvetica",
              fontWeight: "bold"
            }}
          >
            Times: {time} Seconds
          </h4>
        </div>
        <img src={passData.gambar} alt="anjingtidur" id="anjing" />
        <div id="bones"></div>

        <div id="steal">
          <h2 style={{ fontFamily: "helvetica", fontWeight: "bold" }}>
            Steal Spike's bones,
            <br />
            but don't wake him up
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,0.1fr)",
            gap: "5%",
            justifyContent: "center",
            marginTop: "5%"
          }}
        >
          {bones}
        </div>
      </div>

      <div id="Endgame" style={{ display: "none" }}>
        <img
          src="https://media.tenor.com/WtOACVfD2h8AAAAC/dwinterlude-dog.gif"
          alt="jumpscare"
          id="gambarJumpscare"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <h3 class="display-6" style={{ textAlign: "center", marginTop: "2%" }}>
          Oh no! You wake him up
        </h3>
        <div id="Endbutton">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            id="add-player"
            onClick={navigateHome}
          >
            Play Again
          </button>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            id="add-player"
            onClick={navigateHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Games;
