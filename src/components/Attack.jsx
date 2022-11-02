import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UseInterval from "./useInterval";
import { useSetRecoilState } from 'recoil';
import { lifeState } from "../atom/Life";

var randEventTime = 10;
var isAttack = true;

export default function Attack(){
    const[isShownWarning, setIsShownWarning] = useState(false);
    const[isShownSoil, setIsShownSoil] = useState(false);

    const life = useSetRecoilState(lifeState);

    function attackSoil(){
        setTimeout(()=>{
          if (isAttack === false){
            setIsShownWarning(false);
            return attackSoil
          }
          randEventTime = Math.floor((Math.random() * 1000) % 8 + 3); //3~9
          console.log(randEventTime)
          setIsShownWarning(true);          
        }, 3000);

        setTimeout(()=>{
          if (isAttack == false){
            setIsShownWarning(false);
            return attackSoil
          }
          setIsShownWarning(false);
            
        }, 4000);

        setTimeout(()=>{
          setIsShownSoil(true);
          life((prev=>prev-15));
          if (isAttack == false){
            setIsShownSoil(false);
            return attackSoil
          }
        }, 5000);

        setTimeout(()=>{
          // if (isAttack === false){
          //   setIsShownSoil(false);
          //   return attackSoil
          // }
          setIsShownSoil(false);
            
        }, 6000);
    }

    UseInterval(attackSoil, randEventTime * 1000)

    document.addEventListener("keydown", (event)=>{
      const key = event.keyCode
  
      if (key == 38) { // Up
        isAttack = false
  
        
      } else if (key == 40) { // Down
        isAttack = true
      }
    })

    return (
        <AttackDiv>
            {isShownWarning && (<div id="warning">  </div>)}
            {isShownSoil && (<img id="soil" src="/assets/soil.png"/>)}
        </AttackDiv>
    )
}

const AttackDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  
  #warning{
    background-color: rgba(255, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }
  
  #soil{
    width: 100%;
    height: 100%;
  }
`;

