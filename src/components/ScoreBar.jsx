import React from "react";
import styled from "styled-components";
import { playState } from "../atom/Play";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useState } from "react";

export default function ScoreBar() {
  const playing = useRecoilValue(playState);
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const min = Math.floor(playing?.time / 60);
    const sec = playing?.time % 60;
    const timeStr =
      min.toString().padStart(2, "0") + ":" + sec.toString().padStart(2, "0");
    setTime(timeStr);
  }, [playing?.time]);

  return (
    <ScoreBarWrapper>
      <div className="title"> Score </div>
      <div className="time">{time}</div>
    </ScoreBarWrapper>
  );
}

const ScoreBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  font-size: 24px;
  color: #fff;

  .title {
    font-weight: 600;
    margin-right: 5px;
    color: rgba(16, 177, 145, 1);
  }
`;
