import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import { PositionEntity } from "../data/Position";
import { RangeEntity } from "../data/Range";

export interface RangeDisplayData extends Record<string, unknown> {
  strokeStyle: string;
  fillStyle: string;
  lineWidth: number;
}

export type RangeDisplayEntity = Entity &
  PositionEntity &
  RangeEntity & { data: { rangedisplay: RangeDisplayData } };

export class RangeDisplay extends Component {
  public getName(): string {
    return this.constructor.name.toLowerCase();
  }

  protected defaultData(): RangeDisplayData {
    return {
      range: 1,
      strokeStyle: "#ff0000ff",
      fillStyle: "#ffffff00",
      lineWidth: 0,
    };
  }
}

export const RangeDisplayComponent = new RangeDisplay();
