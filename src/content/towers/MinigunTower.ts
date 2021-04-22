import { Texture } from "../../core/rendering/Texture";
import { TowerType } from "../types/TowerType";

const t2 = new Texture("assets/turret-1-2.png");
const t3 = new Texture("assets/turret-1-3.png");

export const MinigunTower: TowerType = {
  name: "Rifle Tower",
  description: "Short-range tower",
  size: 2,
  range: 4,
  rotationRate: 360,
  fireRate: 1,
  cost: 5,
  projectile: {
    speed: 50,
    damage: 2,
    splashRadius: 0,
  },
  levelSprites: ["tower-1-1", "tower-1-2", "tower-1-3"],
  tags: ["ground"],
  upgrades: [
    {
      cost: 10,
      dataDelta: {
        weapon: { projectileType: { damage: 5 }, rate: 0.8 },
        sprite: { source: t2 },
      },
    },
    {
      cost: 20,
      dataDelta: {
        weapon: { projectileType: { damage: 7 } },
        sprite: { source: t3 },
        range: { range: 5 },
      },
    },
  ],
  projectileSpawner: "bullet",
};
