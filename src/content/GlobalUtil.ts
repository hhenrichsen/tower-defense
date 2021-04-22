import { globalState } from "..";

export function isAudioEnabled(): boolean {
  return globalState.getData().audio;
}
