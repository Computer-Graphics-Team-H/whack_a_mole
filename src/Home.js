import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainModal from "./components/MainModal";
import { Accordion, Icon } from "semantic-ui-react";
import LifeBar from "./components/LifeBar";
import ScoreBar from "./components/ScoreBar";

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
import{ Suspense, useRef, useEffect,  } from "react";
import { ReactDOM } from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  return (
    <HomeWrapper>
      <Title className="title">Whack a mole</Title>
      <img id="logo" src="/assets/logo.jpg" />
      <StartButton to={"/game"}> Start </StartButton>

      <Accordion styled>
        <Accordion.Title
          onClick={() => {
            setIsShown(!isShown);
          }}
        >
          <Icon name="dropdown" />
          How to play?
        </Accordion.Title>
        <Accordion.Content active={isShown}>
          ⏳ Your hp decrease according to time
          <br /> 🔨 You can catch mole with your hammer
          <br /> 📸 Avoid the attacking mole by changing the camera's point of
          view
          <br /> ⏱️ The time you survive becomes the point
          <br /> <br />
          Then, Good luck!
        </Accordion.Content>
      </Accordion>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #logo {
    width: 300px;
    margin: 10px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
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
