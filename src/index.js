import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";

import "./styles/index.css";
import "semantic-ui-css/semantic.min.css";
import GameOver from "./GameOver";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
