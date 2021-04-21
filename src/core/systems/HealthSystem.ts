import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Basis } from "../ecs/decorators/Basis";
import { HealthComponent, HealthEntity } from "../components/data/Health";

@Basis(HealthComponent)
export class HealthSystem extends BaseSystem {
  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as HealthEntity;
    const { health } = targetEntity.data;

    if (health.health <= 0) {
      this.manager.emitEvent("health:die", targetEntity, {
        ...targetEntity.data,
      });
      this.manager.removeEntity(targetEntity);
    }
  }
}
