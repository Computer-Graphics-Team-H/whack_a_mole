import React, { Suspense, useRef, useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import "./styles/game.css";
import Hammer2 from "./components/Cartoon_hammer";
import Hole from "./components/Hole";
import Diglett from "./components/Diglett 0";
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
import LifeBar from "./components/LifeBar";
import MainModal from "./components/MainModal";

import { lifeState } from "./atom/Life";
import { playState } from "./atom/Play";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import useInterval from "./components/useInterval";

const Game = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const bonkSound = new Audio(Bonksrc);
  bonkSound.loop = false;

  const [upKeyPressed, setUpKeyPressed] = useState(false);

  const [life, setLife] = useRecoilState(lifeState);
  const resetLife = useResetRecoilState(lifeState);

  const [playing, setPlaying] = useRecoilState(playState);

  // HP decrease interval 1s.
  useInterval(
    () => {
      if (life > 0) setLife(life - 1);
      console.log("HP callback" + playing);
    },
    playing.isPlaying ? 100 : null
  );

  // Canvas Ready Callback
  const onCanvasReady = () => {
    resetLife();
    setPlaying((prev) => {
      const variable = { ...prev };
      variable.isReady = true;

      return { ...variable };
    });
    console.log("Canvas ready" + playing);
  };

  return (
    <div id="game">
      <MainModal />

      <LifeBar />
      <Canvas onCreated={() => onCanvasReady()}>
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          fov={90}
          position={[0, 9, 11]}
          rotation={[(-40 / 180) * Math.PI, 0, 0]}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[20, 20, 20]} angle={0.3} />
        <Suspense fallback={null}>
          <Hammer2 />
          <Diglett />
          <Diglett2 />
          <Diglett3 />
          <Diglett4 />
          <Diglett5 />
          <Diglett6 />
          <Diglett7 />
          <Diglett8 />
          <Diglett9 />
          <Grass position={[0, -1, 0]} scale={[5, 5, 5]} />
          <Hole
            position={[0, -0.125, 0]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
          <Hole
            position={[6, -0.125, 0]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
          <Hole
            position={[-6, -0.125, 0]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />

          <Hole
            position={[0, -0.125, 6]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
          <Hole
            position={[6, -0.125, 6]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
          <Hole
            position={[-6, -0.125, 6]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />

          <Hole
            position={[0, -0.625, -6]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
          <Hole
            position={[6, -0.625, -6]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
          <Hole
            position={[-6, -0.625, -6]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Game;
