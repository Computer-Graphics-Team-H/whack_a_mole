import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./styles/game.css";
import Diglett from "./components/Diglett";
import Hammer from "./components/Toy_hammer";
import Hammer2 from "./components/Cartoon_hammer";
import Diglett2 from "./components/Diglett copy";
import Diglett3 from "./components/Diglett copy 2";
import Diglett4 from "./components/Diglett copy 3";
import Diglett5 from "./components/Diglett copy 4";
import Diglett6 from "./components/Diglett copy 5";
import Diglett7 from "./components/Diglett copy 6";
import Diglett8 from "./components/Diglett copy 7";
import Diglett9 from "./components/Diglett copy 8";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Grass from "./components/Grass";

export default function Game() {

  return (
    <div id="game">
      <div> 게임 화면 </div>
      <Canvas>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={90} position={[0, 4, 10]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={null}>
          {/* <Hammer position={[0,0,0]} scale={[1,1,1]}/>         */}
          <Diglett position={[0, -3, 0]} scale={[5, 5, 5]} />
          <Diglett2 position={[6, -3, 0]} scale={[5, 5, 5]} />
          <Diglett3 position={[-6, -3, 0]} scale={[5, 5, 5]} />
          <Diglett4 position={[0, -3, 6]} scale={[5, 5, 5]} />
          <Diglett5 position={[-6, -3, 6]} scale={[5, 5, 5]} />
          <Diglett6 position={[6, -3, 6]} scale={[5, 5, 5]} />
          <Diglett7 position={[6, -3, -6]} scale={[5, 5, 5]} />
          <Diglett8 position={[0, -3, -6]} scale={[5, 5, 5]} />
          <Diglett9 position={[-6, -3, -6]} scale={[5, 5, 5]} />
          <Grass position={[0, -1, 0]} scale ={[5,5,5]}/>
        </Suspense>

      </Canvas>
    </div>
  );
}

