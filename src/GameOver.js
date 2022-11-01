import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function GameOver() {
  const { state } = useLocation();
  console.log(state);

  const min = Math.floor(state / 60);
  const sec = state % 60;
  const timeStr =
    min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0");
  
  return (
    <GameOverWrapper>
      <div className="title">Game Over</div>
      <div className="score">⏱️{timeStr}</div>
      
      <Button to="/">Go home</Button>
    </GameOverWrapper>
  );
}

const GameOverWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;
  color: #fff;

  .title {
    font-weight: 800;
    font-size: 32px;
    line-height: 2;
    margin: 50px 0 10px 0;
  }

  .score{
    font-size: 24px;
    margin-bottom: 50px;
  }
`;

const Button = styled(Link)`
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
