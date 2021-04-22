import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";

export interface HealthData extends Record<string, unknown> {
  health: number; // health units
  maxHealth: number;
}

export type HealthEntity = Entity & { data: { health: HealthData } };

export class Health extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): HealthData {
    return { health: 10, maxHealth: 10 };
  }
}

export const HealthComponent = new Health();
