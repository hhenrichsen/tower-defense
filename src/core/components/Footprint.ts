import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import Vector2 from "../geometry/Vector2";

export interface FootprintData extends Record<string, unknown> {
  size: number; // virtual coordinate units^2
}

export type FootprintEntity = Entity & { data: { health: FootprintData } };

/**
 * Deals with grid-aligned sizes of entities.
 */
export class Footprint extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): FootprintData {
    return { size: 1 };
  }
}

export const FootprintComponent = new Footprint();
