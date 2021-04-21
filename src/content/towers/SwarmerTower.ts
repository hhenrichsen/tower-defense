import { TowerType } from "../types/TowerType";

export const SwarmerTower: TowerType = {
  name: "Swarmer Tower",
  description: "Rapidfire Anti-Air Tower",
  size: 2,
  range: 5,
  rotationRate: 90,
  fireRate: 0.25,
  cost: 20,
  projectile: {
    speed: 20,
    damage: 5,
    splashRadius: 0,
  },
  levelSprites: ["tower-3-1", "tower-3-2", "tower-3-3"],
  tags: ["air"],
};
