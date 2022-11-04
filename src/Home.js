import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Accordion, Icon } from "semantic-ui-react";

import StartBGMSrc from "./sounds/start_bgm.mp3";

const startBGM = new Audio(StartBGMSrc);

export default function Home() {
  const [isShown, setIsShown] = useState(false);

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

      <img id="soil" src="/assets/soil.png" />
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
