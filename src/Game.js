import React, {
  Suspense,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import "./styles/game.css";
import styled from "styled-components";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

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
import { PerspectiveCamera } from "@react-three/drei";
import Grass from "./components/Grass";
import { Vector3 } from "three";

import LifeBar from "./components/LifeBar";
import MainModal from "./components/MainModal";

import Bonksrc from "./sounds/bonk_sound.mp3";
import SoilSrc from "./sounds/soil_sound.mp3";

import { lifeState } from "./atom/Life";
import { playState } from "./atom/Play";
import { useRecoilState, useResetRecoilState } from "recoil";
import useInterval from "./utils/useInterval";
import ScoreBar from "./components/ScoreBar";
import { useNavigate } from "react-router-dom";
import Attack from "./components/Attack";
import UseInterval from "./utils/useInterval";
import { randomSpherePoint } from "./utils/Animation";

var fois = 0; // MAX 100
const dt = 1.5;

const bonkSound = new Audio(Bonksrc);
const soilSound = new Audio(SoilSrc);

const Game = () => {
  bonkSound.loop = false;
  soilSound.loop = false;

  const [life, setLife] = useRecoilState(lifeState);
  const resetLife = useResetRecoilState(lifeState);

  const [playing, setPlaying] = useRecoilState(playState);
  const resetPlaying = useResetRecoilState(playState);

  const navigate = useNavigate();
  // HP decrease interval 1s.
  useInterval(
    () => {
      if (life <= 0) {
        // Game Over
        const score = playing.time;
        navigate("/gameover", { state: score });
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

  // Camera
  const [camera, setCamera] = useState({
    pov: 90,
    position: [0, 10, 15],
    intensity: 0.5,
  });

  useEffect(() => {
    const callback = (event) => {
      if (event.key == "ArrowUp") {
        const newCamera = { pov: 20, position: [0, 60, 70], intensity: 0.5 };
        setCamera(newCamera);
      } else if (event.key == "ArrowDown") {
        const newCamera = { pov: 90, position: [0, 10, 15], intensity: 0.5 };
        setCamera(newCamera);
      }
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  // Camera - Wave
  const startPos = new Vector3(0, 10, 15);
  function cameraWave() {
    const ran = randomSpherePoint(0, 0, 0, 1);
    const vec = new Vector3(ran[0], ran[1], ran[2]);
    const newPos = startPos.add(vec);

    const newIntensity =
      fois <= 5 ? camera.intensity + dt : camera.intensity - dt;

    const newCamera = {
      pov: 90,
      position: [newPos.x, newPos.y, newPos.z],
      intensity: newIntensity,
    };
    setCamera(newCamera);
  }

  var [isWaving, setIsWaving] = useState(false);
  UseInterval(() => {
    if (isWaving) {
      cameraWave(1000, 1);
      fois += 1;

      if (fois >= 10) {
        const newCamera = {
          pov: 90,
          position: [startPos.x, startPos.y, startPos.z],
          intensity: 0.5,
        };
        setCamera(newCamera);

        setIsWaving(false);
        fois = 0;
      }
    }
  }, 10);

  function wave() {
    if (!isWaving) setIsWaving(true);
  }

  // Sound Effect
  function playSoilSound() {
    soilSound.currentTime = 0;
    soilSound.play();
  }

  function playBonkSound() {
    bonkSound.currentTime = 0;
    bonkSound.play();
  }

  // Clean code
  useEffect(() => {
    return () => {
      resetLife();
      resetPlaying();
    };
  }, []);

  return (
    <GameWrapper id="game">
      <MainModal />

      <Canvas id="canvas" shadowMap colorManagement>
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          fov={camera.pov}
          position={camera.position}
          rotation={[(-40 / 180) * Math.PI, 0, 0]}
          lookAt={new Vector3(0, 0, 0)}
        />
        <ambientLight intensity={camera.intensity} color={0x909090} />
        <spotLight castShadow position={[10, 60, 30]} angle={0.2} />
        <Suspense fallback={null}>
          <Hammer2 castShadow />
          <Diglett
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett2
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett3
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett4
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett5
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett6
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett7
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett8
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Diglett9
            castShadow
            waveCamera={() => wave()}
            playBonkSound={() => {
              playBonkSound();
            }}
          />
          <Grass receiveShadow position={[0, -1, 0]} scale={[5, 5, 5]} />
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

      <Attack
        playSoilSound={() => {
          playSoilSound();
        }}
      />

      <PlayInfoWrapper>
        <LifeBar />
        <ScoreBar />
      </PlayInfoWrapper>
    </GameWrapper>
  );
};

//
export default Game;

const PlayInfoWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GameWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
