import { VelocityTargetEntity } from "../../core/components/behavior/PositionTarget";
import { RotationTargetEntity } from "../../core/components/behavior/RotationTarget";
import { HealthEntity } from "../../core/components/data/Health";
import { RangeEntity } from "../../core/components/data/Range";
import { Component } from "../../core/ecs/Component";
import { AutoName } from "../../core/ecs/decorators/AutoName";
import { DamageEntity } from "./Damage";

export interface DamageTargetData extends Record<string, unknown> {
  target: HealthEntity; // health units
}

export type DamageTargetEntity = DamageEntity &
  VelocityTargetEntity & { data: { damageTarget: DamageTargetData } };

@AutoName
export class DamageTarget extends Component {
  protected defaultData(): DamageTargetData {
    return {
      target: null,
    };
  }
}

export const DamageTargetComponent = new DamageTarget();
export default DamageTargetComponent;
