import { RotationTargetEntity } from "../../core/components/behavior/RotationTarget";
import { RangeEntity } from "../../core/components/data/Range";
import { Component } from "../../core/ecs/Component";
import { AutoName } from "../../core/ecs/decorators/AutoName";

export interface DamageData extends Record<string, unknown> {
  damage: number; // health units
}

export type DamageEntity = RangeEntity &
  RotationTargetEntity & { data: { damage: DamageData } };

@AutoName
export class Damage extends Component {
  protected defaultData(): DamageData {
    return {
      damage: 1,
    };
  }
}

export const DamageComponent = new Damage();
export default DamageComponent;
