import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import Vector2 from "../geometry/Vector2";

export interface HealthData extends Record<string, unknown> {
  health: number; // health units
}

export type HealthEntity = Entity & { data: { health: HealthData } };

export class Health extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): HealthData {
    return { health: 10 };
  }
}

export const HealthComponent = new Health();
