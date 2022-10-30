import { atom } from "recoil";

/**
 * playState
 * 게임이 실행 중인지 확인
 * true, false
 */
export const playState = atom({
  key: "playState",
  default: { isPlaying: false, isReady: false },
});
