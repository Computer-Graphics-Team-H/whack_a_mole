import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LifeBar from "./components/LifeBar";

export default function Home() {
  return (
    <HomeWrapper>
      <Title className="title">Mole game</Title>
      <Button to={"/game"}> Start </Button>
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
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin: 30px 0;
`;

const Button = styled(Link)`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(16, 177, 145, 1);
  text-decoration: none;
  color: #fff;
  font-size: 24px;

  &:hover {
    background-color: rgba(16, 177, 145, 0.5);
  }
`;
