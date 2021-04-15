export interface PersistedData {
  actions: Array<string>;
  keyMap: Record<string, string>;
}

export const DEFAULT_PERSISTED_DATA: PersistedData = {
  actions: ["upgrade", "sell", "nextWave"],
  keyMap: {
    upgrade: "u",
    sell: "s",
    start: "g",
  },
};
