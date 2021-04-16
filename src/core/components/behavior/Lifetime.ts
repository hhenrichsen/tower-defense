import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";

export interface LifetimeData extends Record<string, unknown> {
  lifetime: number; // seconds
  elapsed: number; // seconds
}

export type LifetimeEntity = Entity & { data: { lifetime: LifetimeData } };

/**
 * Deals with grid-aligned sizes of entities.
 */
export class Lifetime extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): LifetimeData {
    return { lifetime: 1, elapsed: 0 };
  }
}

export const LifetimeComponent = new Lifetime();
