export interface BasePersistedData {
  actions: Array<string>;
  scores: Array<Score>;
  keyMap: Record<string, string>;
}

export interface Score {
  name: string;
  score: number;
}

export const DEFAULT_PERSISTED_DATA: BasePersistedData = {
  actions: ["upgrade", "sell", "nextWave"],
  scores: [],
  keyMap: {
    upgrade: "u",
    sell: "s",
    start: "g",
  },
};
