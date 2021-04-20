import { VelocityTargetEntity } from "../../core/components/behavior/PositionTarget";
import { HealthEntity } from "../../core/components/data/Health";
import { PositionEntity } from "../../core/components/data/Position";
import { Component } from "../../core/ecs/Component";
import { AutoName } from "../../core/ecs/decorators/AutoName";
import { DamageEntity } from "./Damage";

export interface DamageSplashData extends Record<string, unknown> {
  radius: number; // virtual coordinate units
  target: HealthEntity & PositionEntity;
}

export type DamageSplashEntity = VelocityTargetEntity &
  DamageEntity & { data: { splashDamage: DamageSplashData } };

@AutoName
export class SplashDamage extends Component {
  protected defaultData(): DamageSplashData {
    return {
      radius: 1,
      target: null,
    };
  }
}

export const SplashDamageComponent = new SplashDamage();
export default SplashDamageComponent;
