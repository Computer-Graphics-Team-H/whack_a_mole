import React, { useEffect, useState } from "react";
import useInterval from "../utils/useInterval";

import { Progress } from "semantic-ui-react";
import styled from "styled-components";

import { lifeState } from "../atom/Life";
import { useRecoilValue } from "recoil";

export default function LifeBar() {
  const [color, setColor] = useState("teal");

  const life = useRecoilValue(lifeState);

  // Change color (under 30: red, game out 0: gray)
  useEffect(() => {
    if (life > 30) setColor("teal");
    else if (life > 1) setColor("red");
    else setColor("grey");
  }, [life]);

  return (
    <LifeBarWrapper>
      <Progress percent={life} color={color} progress />
    </LifeBarWrapper>
  );
}

const LifeBarWrapper = styled.div`
  width: 400px;
  margin: 30px 10px 10px 10px;

  .progress {
    font-size: 16px;
    line-height: 1.1;
  }
`;
