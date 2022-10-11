import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>
);
