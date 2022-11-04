import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UseInterval from "../utils/useInterval";
import { useSetRecoilState } from "recoil";
import { lifeState } from "../atom/Life";
import { attackState } from "../atom/Time";
import { useRecoilState } from "recoil";

var availableAttack = true;

export default function Attack(props) {
  const [isShownWarning, setIsShownWarning] = useState(false);
  const [isShownSoil, setIsShownSoil] = useState(false);

  var time = 10;
  const life = useSetRecoilState(lifeState);
  const [isAttack, setIsAttack] = useRecoilState(attackState);

  function attackSoil() {
    setIsAttack(true);
    setTimeout(() => {
      if (availableAttack === false) {
        setIsShownWarning(false);
        setIsAttack(false);
        return attackSoil;
      }
      time = Math.floor(((Math.random() * 1000) % 8) + 3); //3~9
      console.log(time);
      setIsShownWarning(true);
    }, 3000);

    setTimeout(() => {
      if (availableAttack === false) {
        setIsShownWarning(false);
        setIsAttack(false);
        return attackSoil;
      }
      setIsShownWarning(false);
    }, 4000);

    setTimeout(() => {
      if (availableAttack == true) {
        props.playSoilSound(); // play Sound

        setIsShownSoil(true);
        setIsAttack(true);
        life((prev) => prev - 15);
        return attackSoil;
      }
    }, 5000);

    setTimeout(() => {
      setIsShownSoil(false);
      setIsAttack(false);
    }, 6000);
  }

  UseInterval(attackSoil, time * 1000);

  document.addEventListener("keydown", (event) => {
    const key = event.keyCode;

    if (key === 38) {
      // Up
      availableAttack = false;
    } else if (key === 40) {
      // Down
      availableAttack = true;
    }
  });

  return (
    <AttackDiv>
      {isShownWarning && <div id="warning"> </div>}
      {isShownSoil && <img id="soil" src="/assets/soil.png" />}
    </AttackDiv>
  );
}

const AttackDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  #warning {
    background-color: rgba(255, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
  }

  #soil {
    width: 100vw;
    height: 100vh;
  }
`;
