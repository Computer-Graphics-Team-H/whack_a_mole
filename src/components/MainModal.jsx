import React from "react";
import { useState } from "react";
import { Modal, Header, Button } from "semantic-ui-react";
import styled from "styled-components";

import { playState } from "../atom/Play";
import { useRecoilState, useResetRecoilState, useRecoilValue } from "recoil";

export default function MainModal() {
  const [open, setOpen] = useState(true);
  const [playing, setPlaying] = useRecoilState(playState);

  function closeModal() {
    // if (playing.isReady) {
    setOpen(false);
    setPlaying((prev) => {
      const variable = { ...prev };
      variable.isPlaying = true;

      return { ...variable };
    });
    //} else {
    //  alert("Canvas is loading...");
    //}
  }

  return (
    <Modal
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content>
        <Modal.Description>
          <DescriptionWrapper>
            <div className="title">Are you Ready?</div>
            <StartButton onClick={() => closeModal()}>yes</StartButton>
          </DescriptionWrapper>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 24px;
    font-weight: 800;
  }

  .description {
    font-size: 16px;
  }
`;

const StartButton = styled("div")`
  width: 100%;
  padding: 5px 10px;
  margin: 20px 50px;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(16, 177, 145, 1);
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  justify-self: flex-end;

  &:hover {
    background-color: rgba(16, 177, 145, 0.5);
    color: #fff;
  }
`;
