import { TowerType } from "../types/TowerType";

export const MissileTower: TowerType = {
  name: "MissileTower",
  description: "Long-range splash tower",
  size: 2,
  range: 8,
  rotationRate: 90,
  fireRate: 1,
  cost: 20,
  projectile: {
    speed: 20,
    damage: 5,
    splashRadius: 1,
  },
  levelSprites: ["tower-2-1", "tower-2-2", "tower-2-3"],
  tags: ["ground"],
};
