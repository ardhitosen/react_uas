import "bootstrap/dist/css/bootstrap.min.css";
import dog from "./assets/dog.png";
import right from "./assets/kananarrow.png";
import left from "./assets/kiriarrow.png";
import mainmenu from "./assets/mainmenu.mp3";
import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import PlayList from "./playList";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState("");
  const [textInput, setTextInput] = useState("");
  const [player, setPlayer] = useState("1st Player");
  const [jmlhPlayer, setJmlh] = useState(0);
  const [playerList, setPlayerList] = useState([]);
  const url = "https://dog.ceo/api/breeds/image/random";
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const url2 =
    "https://api.openweathermap.org/data/2.5/weather?lat=-6.26&lon=106.61&appid=9abb55c7788f6c06c8edff2665280af6";
  const [time, setTime] = useState(null);
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState("#ffffff");
  const [icon, setIcon] = useState(null);
  const [audio, setAudio] = useState(false);
  const [audioGambar, setAudioGambar] = useState(
    "https://img.icons8.com/material-rounded/24/null/no-audio--v1.png"
  );

  useEffect(() => {}, []);

  document.body.style.backgroundColor = "#D7ECD9";
  const passData = {
    gambar: data.message,
    playerAmount: jmlhPlayer,
    weather: weather,
    background: background
  };

  const navigateAbout = () => {
    navigate("/About");
  };

  const navigateToGame = () => {
    if (jmlhPlayer < 2) {
      alert("Kurang orang!");
    } else {
      navigate("/Game", {
        state: passData
      });
    }
  };

  const handleClick = (event) => {
    getDog();
  };

  function handlePlayerList(event) {
    if (textInput === "") {
      alert("Masukkan nama player!");
    } else {
      const arr = [...playerList, textInput];
      setPlayerList(arr);
      setJmlh(jmlhPlayer + 1);
    }
  }

  function handleCount() {
    if (textInput !== "") {
      setCount(count + 1);
    }
  }

  function handleChangeNumber(event) {
    if (textInput !== "") {
      var newNumCount = "";
      if (count === 1) {
        newNumCount = "2nd Player";
      } else if (count === 2) {
        newNumCount = "3rd Player";
      } else {
        newNumCount = 1 + count + "th Player";
      }
      setPlayer(newNumCount);
      setTextInput("");
    }
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setTextInput(newValue);
  }

  function audioClick() {
    if (audio === true) {
      setAudio(false);
      setAudioGambar(
        "https://img.icons8.com/material-rounded/24/null/no-audio--v1.png"
      );
      document.getElementById("audio").pause();
    } else if (audio === false) {
      setAudio(true);
      setAudioGambar(
        "https://img.icons8.com/material-rounded/24/null/no-audio--v2.png"
      );
      document.getElementById("audio").play();
    }
  }

  function getDog() {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }

  function getWeather() {
    axios.get(url2).then((response) => {
      setWeather(response.data.weather[0].main);
    });
  }

  useEffect(() => {
    getDog();
    getWeather();

    const currentTime = new Date().getHours();
    setTime(currentTime);

    if (currentTime >= 6 && currentTime < 12) {
      setBackground("#ffe9a6");
    } else if (currentTime >= 12 && currentTime < 18) {
      setBackground("#f8aa27");
    } else {
      setBackground("#6B728E");
    }

    if (weather === "Clear") {
      setIcon("https://img.icons8.com/ios/100/null/sun--v1.png");
    } else if (weather === "Clouds") {
      setIcon(
        "https://img.icons8.com/external-simple-line-edt.graphics/100/null/external-Clouds-weather-simple-line-edt.graphics.png"
      );
    } else {
      setIcon("https://img.icons8.com/ios/100/null/torrential-rain--v2.png");
    }
  }, []);

  return (
    <div class="container-fluid">
      <audio id="audio">
        <source src={mainmenu} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <h2 class="display-4" style={{ textAlign: "center" }}>
        Don't Take Spike's Bones
      </h2>
      <img src={dog} alt="doggy" class="img-fluid" id="logo" />
      <hr />
      <img
        src={audioGambar}
        alt="volMute"
        style={{ width: "3%" }}
        id="volume"
        onClick={audioClick}
      />
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={navigateAbout}
      >
        About Us
      </button>
      <div id="pilihan">
        <img
          src={left}
          alt="left"
          class="img-fluid"
          style={{ width: "5%", height: "3%", marginTop: "5%" }}
          onClick={handleClick}
        />
        <img
          id="dog"
          src={data.message}
          alt="pilihan"
          style={{ width: "15%" }}
        />
        <img
          src={right}
          alt="right"
          class="img-fluid"
          style={{ width: "5%", height: "3%", marginTop: "5%" }}
          button
          onClick={handleClick}
        />
      </div>
      <div class="player-text">
        <h1 id="playcount">{player}</h1>
      </div>
      <div class="form-floating mb-3" style={{ width: "20%" }}>
        <input
          type="text"
          class="form-control"
          id="newplayer"
          placeholder="New Player"
          value={textInput}
          onChange={handleChange}
          required
        />
        <label for="nama">New Player</label>
      </div>
      <div class="buttons">
        <div id="firstbutton"></div>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          id="add-player"
          onClick={(event) => {
            handlePlayerList();
            handleChangeNumber();
            handleCount();
          }}
        >
          Add Player
        </button>
        <div id="secondbutton" style={{ marginLeft: "4%" }}>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            id="play"
            style={{ paddingLeft: "100%", paddingRight: "100%" }}
            onClick={navigateToGame}
          >
            Play
          </button>
        </div>
      </div>
      <ul id="player-names" style={{ marginTop: "5%", marginBottom: "5%" }}>
        {playerList.map((textInput, index) => (
          <PlayList key={index} id={index} text={textInput} />
        ))}
      </ul>
    </div>
  );
}

export default App;
