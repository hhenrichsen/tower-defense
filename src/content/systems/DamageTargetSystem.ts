import { VelocityTargetComponent } from "../../core/components/behavior/PositionTarget";
import { Basis } from "../../core/ecs/decorators/Basis";
import { Required } from "../../core/ecs/decorators/Required";
import { Entity } from "../../core/ecs/Entity";
import { BaseSystem } from "../../core/ecs/System";
import DamageComponent from "../components/Damage";
import DamageTargetComponent, {
  DamageTargetEntity,
} from "../components/DamageTarget";

@Basis(DamageTargetComponent)
@Required([VelocityTargetComponent, DamageComponent])
export class DamageTargetSystem extends BaseSystem {
  onManagerAwake() {
    this.listen("velocityTarget:reached");
  }

  onEvent(_: string, entity: DamageTargetEntity) {
    if (!entity.active) {
      this.manager.removeEntity(entity);
      return;
    }
    const { damageTarget, damage } = entity.data;
    damageTarget.target.data.health.health -= damage.damage;
    this.manager.removeEntity(entity);
  }
}
