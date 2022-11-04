import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Accordion, Icon } from "semantic-ui-react";

import Hole from "./components/Hole";
import Diglett from "./components/Diglett 0";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Grass from "./components/Grass";
import UseInterval from "./utils/useInterval";
import { Vector3 } from "three";
import { randomSpherePoint } from "./utils/Animation";

var fois = 0; // MAX 100

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  const [camera, setCamera] = useState({ pov: 90, position: [0, 10, 15] });

  const startPos = new Vector3(0, 10, 15);
  function cameraWave() {
    const ran = randomSpherePoint(0, 0, 0, 1);
    const vec = new Vector3(ran[0], ran[1], ran[2]);
    const newPos = startPos.add(vec);
    console.log(newPos);

    console.log("camera");
    const newCamera = { pov: 90, position: newPos };
    setCamera(newCamera);
  }

  var [isWaving, setIsWaving] = useState(false);
  UseInterval(() => {
    if (isWaving) {
      console.log("wave!! " + fois);
      cameraWave(1000, 1);
      fois += 1;

      if (fois >= 5) {
        setIsWaving(false);
        fois = 0;
      }
    } else {
      const newCamera = { pov: 90, position: startPos };
      setCamera(newCamera);
    }
  }, 10);

  return (
    <HomeWrapper>
      <Title className="title">Whack a mole</Title>
      <img id="logo" src="/assets/whack-a-mole.png" />
      <StartButton to={"/game"}> Start </StartButton>

      <Accordion styled>
        <Accordion.Title
          className="accordion_title"
          onClick={() => {
            setIsShown(!isShown);
          }}
        >
          <Icon name="dropdown" />
          How to play?
        </Accordion.Title>
        <Accordion.Content active={isShown} className="accordion_content">
          ⏳ Your hp decrease according to time
          <br /> 🔨 You can catch mole with your hammer
          <br /> 📸 Avoid the attacking mole by changing the camera's point of
          view
          <br /> ⏱️ The time you survive becomes the point
          <br /> <br />
          Then, Good luck!
        </Accordion.Content>
      </Accordion>

      <Canvas>
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          rotation={[(-40 / 180) * Math.PI, 0, 0]}
          pov={camera.pov}
          position={camera.position}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 60, 30]} angle={0.2} />
        <Suspense fallback={null}>
          <Diglett waveCamera={() => setIsWaving(true)} />
          <Grass position={[0, -1, 0]} scale={[5, 5, 5]} />
          <Hole
            position={[0, -0.125, 0]}
            scale={[3, 3, 3]}
            rotation={[-0.1, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  #logo {
    width: 100px;
    margin: 20px 0 50px 0;
  }

  .accordion_title,
  .accordion_content {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  color: #fff;
`;

const StartButton = styled(Link)`
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: rgba(16, 177, 145, 1);
  text-decoration: none;
  color: #fff;
  font-size: 24px;

  &:hover {
    background-color: rgba(16, 177, 145, 0.5);
    color: #fff;
  }
`;
