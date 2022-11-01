import { atom } from "recoil";

/**
 * playState
 * 게임 실행 관련 정보들
 * isReady: Canvas가 로딩되었는지
 * isPlaying: 게임 플레이 중인지
 * score: 플레이한 시간
 */
export const playState = atom({
  key: "playState",
  default: { isReady: false, isPlaying: false, time: 0 },
});
