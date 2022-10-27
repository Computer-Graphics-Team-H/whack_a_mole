import React, { Suspense, useRef, useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three"
import "./styles/game.css";
import Diglett from "./components/Diglett 0";
import Hammer2 from "./components/Cartoon_hammer";
import Hole from "./components/Hole";
import Diglett2 from "./components/Diglett 1";
import Diglett3 from "./components/Diglett 2";
import Diglett4 from "./components/Diglett 3";
import Diglett5 from "./components/Diglett 4";
import Diglett6 from "./components/Diglett 5";
import Diglett7 from "./components/Diglett 6";
import Diglett8 from "./components/Diglett 7";
import Diglett9 from "./components/Diglett 8";
import Bonksrc from "./components/bonk_sound.mp3";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Grass from "./components/Grass";
import { BooleanKeyframeTrack, VectorKeyframeTrack } from "three";

const Game = () =>{
  const [coords, setCoords] = useState({x: 0, y: 0});

  const [hammerPos, setPos] = useState({x: 0, y: 0, z: 0});
  const [hammerSize, setSize] = useState({scale: 0});
  const [hammerRotation, setRotate] = useState({x: 0, y: 0, z: 0});
  const offset = 1.5;
  const timeOffset = 1000;

  const bonkSound = new Audio(Bonksrc);
  bonkSound.loop = false;

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };
  
  const [upKeyPressed, setUpKeyPressed] = useState(false);
  return (
    <div id="game">
      <div> 게임 화면 </div>
      <Canvas onMouseMove={handleMouseMove}>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={90} position={[0, 4, 10]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[20, 20, 20]} angle={0.3} />
        <Suspense fallback={null}>
          <Hammer2 position={[hammerPos.x, 2.5, hammerPos.z]} scale={[hammerSize.scale,hammerSize.scale,hammerSize.scale]} rotation={[0, 0, 2/3 *Math.PI]} />       
          <Diglett/>
          <Diglett2/>
          <Diglett3/>
          <Diglett4/>
          <Diglett5/>
          <Diglett6/>
          <Diglett7/>
          <Diglett8/>
          <Diglett9/>
          <Grass position={[0, -1, 0]} scale ={[5,5,5]}/>
          <Hole position={[0, -0.125, 0]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
          <Hole position={[6, -0.125, 0]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
          <Hole position={[-6, -0.125, 0]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>

          <Hole position={[0, -0.125, 6]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
          <Hole position={[6, -0.125, 6]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
          <Hole position={[-6, -0.125, 6]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>

          <Hole position={[0, -0.625, -6]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
          <Hole position={[6, -0.625 ,-6]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
          <Hole position={[-6, -0.625, -6]} scale ={[3,3,3]} rotation={[-0.1,0,0]}/>
        </Suspense>

      </Canvas>
      <h2>
      Coords: {coords.x} {coords.y}
      </h2>
    </div>
  );
}
export default Game;
