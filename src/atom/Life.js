import { atom } from "recoil";

/**
 * Life
 * ProgressBar에서 1초마다 -1씩 감소,
 * 각 Digglet에서 두더지를 누르면 +5씩 증가
 */
export const lifeState = atom({
  key: "lifeState",
  default: 100,
});
