import { Texture } from "../../core/rendering/Texture";
import { TowerType } from "../types/TowerType";

const t2 = new Texture("assets/turret-2-2.png");
const t3 = new Texture("assets/turret-2-3.png");

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
  upgrades: [
    {
      cost: 20,
      dataDelta: {
        weapon: {
          projectileType: {
            damage: 10,
            splashRadius: 1.25,
          },
        },
        sprite: {
          source: t2,
        },
      },
    },
    {
      cost: 40,
      dataDelta: {
        weapon: {
          projectileType: {
            damage: 10,
            splashRadius: 2,
          },
        },
        sprite: {
          source: t3,
        },
      },
    },
  ],
  projectileSpawner: "missile",
};
