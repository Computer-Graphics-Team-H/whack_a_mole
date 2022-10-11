import React from "react";
import { Canvas } from "@react-three/fiber";

import "./styles/game.css";
import Diglett from "./components/Diglett";
import { OrbitControls } from "@react-three/drei";
import Grass from "./components/Grass";

export default function Game() {
  return (
    <div id="game">
      <div> 게임 화면 </div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />

        <Diglett position={[0, -1, 0]} scale={[5, 5, 5]} />
        <Grass position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  );
}