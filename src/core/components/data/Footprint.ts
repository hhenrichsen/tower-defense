import { lowerFirst } from "lodash";
import { Component } from "../../ecs/Component";
import { PositionEntity } from "./Position";

export interface FootprintData extends Record<string, unknown> {
  size: number; // virtual coordinate units^2
  tracked: boolean;
}

export type FootprintEntity = PositionEntity & {
  data: { footprint: FootprintData };
};

/**
 * Deals with grid-aligned sizes of entities.
 */
export class Footprint extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): FootprintData {
    return { size: 1, tracked: false };
  }
}

export const FootprintComponent = new Footprint();
