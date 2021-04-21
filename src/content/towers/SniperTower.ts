import { TowerType } from "../types/TowerType";

export const SniperTower: TowerType = {
  name: "Sniper Tower",
  description: "Long-range slow-firing tower.",
  size: 2,
  range: 12,
  rotationRate: 45,
  fireRate: 2.5,
  cost: 40,
  projectile: {
    speed: 20,
    damage: 20,
    splashRadius: 0,
  },
  levelSprites: ["tower-4-1", "tower-4-2", "tower-4-3"],
  tags: ["air", "ground"],
};
