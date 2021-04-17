import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { PositionEntity } from "../data/Position";

export interface MagnetData extends Record<string, unknown> {
  radius: DynamicConstant<number>;
}

export type MagnetEntity = PositionEntity & { data: { magnet: MagnetData } };
export class Magnet extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }

  protected defaultData(): MagnetData {
    return { radius: 1 };
  }
}

export const MagnetComponent = new Magnet();
