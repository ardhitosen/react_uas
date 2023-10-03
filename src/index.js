import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./stylegame.css";
import "./AboutUs.css";
import App from "./App";
import Games from "./Games";
import AboutUs from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Game" element={<Games />} />
      <Route path="/About" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);
