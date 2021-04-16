import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import { Entity } from "../../ecs/Entity";
import { PositionEntity } from "../data/Position";

export interface UpgradeData extends Record<string, unknown> {
  cost: DynamicConstant<number>; // currency units
  dataDelta: DynamicConstant<Record<string, Record<string, unknown>>>;
}

export type UpgradeEntity = Entity &
  PositionEntity & { data: { upgrade: UpgradeData } };

export class Upgrade extends Component {
  public getName(): string {
    return lowerFirst(this.constructor.name);
  }
  protected defaultData(): UpgradeData {
    return { cost: 0, dataDelta: {} };
  }
}

export const UpgradeComponent = new Upgrade();
export default UpgradeComponent;
