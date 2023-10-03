import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
export default function about() {
  const navigate = useNavigate();
  const navigateback = () => {
    navigate("/");
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#D7ECD9";
  }, []);

  return (
    <div>
      <div class="about-us"></div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="back">
        <img
          src="https://img.icons8.com/pastel-glyph/64/null/circled-left.png"
          alt="back"
          style={{ width: "4%" }}
          onClick={navigateback}
        />
        <div class="row">
          <div class="column">
            <div class="card">
              <img src="/" alt="" style={{ width: "5%" }} />
              <div class="container">
                <h2>Christoforus Ardhito</h2>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="" alt="" style={{ width: "5%" }} />
              <div class="container">
                <h2>David Ongky</h2>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="" alt="" style={{ width: "5%" }} />
              <div class="container">
                <h2>Juan Terro</h2>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img src="" alt="" style={{ width: "5%" }} />
              <div class="container">
                <h2>Fina Valentina</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
