import React, { Suspense, useState } from "react";
import { Canvas} from "@react-three/fiber";
import "./styles/game.css";
import styled from "styled-components";

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
import { Vector3 } from "three";

import LifeBar from "./components/LifeBar";
import MainModal from "./components/MainModal";

import { lifeState } from "./atom/Life";
import { playState } from "./atom/Play";
import { useRecoilState, useResetRecoilState } from "recoil";
import useInterval from "./components/useInterval";
import ScoreBar from "./components/ScoreBar";
import { useNavigate } from "react-router-dom";
import Attack from "./components/Attack";
import { attackState } from "./atom/Time";

const Game = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const[isAttack, setIsAttack] = useRecoilState(attackState);

  const bonkSound = new Audio(Bonksrc);
  bonkSound.loop = false;

  const [upKeyPressed, setUpKeyPressed] = useState(false);

  const [life, setLife] = useRecoilState(lifeState);
  const resetLife = useResetRecoilState(lifeState);

  const [playing, setPlaying] = useRecoilState(playState);
  const resetPlaying = useResetRecoilState(playState);
  
  const navigate = useNavigate();
  // HP decrease interval 1s. ** 후에 흙뿌리기랑 감안해서 속도 조정 
  useInterval(
    () => {
      if (life <= 0) {
        // Game Over
        const score = playing.time;
        navigate("/gameover", {state: score});
        console.log(playing.time);
        resetPlaying();

        return;
      }
      
      setLife(life - 1);
    },
    playing.isPlaying ? 1000 : null
  );

  useInterval(
    () => {
      if (life > 0) {
      setPlaying((prev) => {
        
          const variable = { ...prev };
          variable.time += 1;

          return { ...variable };
      });
      }
    },
    playing.isPlaying ? 1000 : null
  );

  // Canvas Ready Callback
  const onCanvasReady = () => {
    resetLife();
    setPlaying((prev) => {
      const variable = { ...prev };
      variable.isReady = true;

      return { ...variable };
    });
  };

  // Camera
  const [camera, setCamera] = useState({ pov: 90, position: [0, 10, 15] });
  document.addEventListener("keydown", (event)=>{
    const key = event.keyCode

    if (key === 38) { // Up
      const newCamera = { pov: 20, position: [0, 60, 70] }
      setCamera(newCamera);

      
    } else if (key === 40) { // Down
        const newCamera = { pov: 90, position: [0, 10, 15] }
        setCamera(newCamera);
    }
})
  
  return (
    <GameWrapper id="game">
      <MainModal />

      <PlayInfoWrapper>
        <LifeBar />
        <ScoreBar />
      </PlayInfoWrapper>

      <Canvas onCreated={() => onCanvasReady()}>
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          fov={camera.pov}
          position={camera.position}
          rotation={[(-40 / 180) * Math.PI, 0, 0]}
          lookAt={new Vector3(0, 0, 0)}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 60, 30]} angle={0.2} />
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
      <Attack/>
      {/* {isAttack && (<Attack></Attack>)} */}
    </GameWrapper>
  );
};

// 
export default Game;

const PlayInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GameWrapper = styled.div`
  width: 100%;
  height:100vh;
  background-color: black;
`