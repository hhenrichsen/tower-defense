import { HealthDisplayComponent } from "../components/marker/HealthDisplay";
import { HealthComponent, HealthEntity } from "../components/data/Health";
import { PositionComponent, PositionEntity } from "../components/data/Position";
import { getDynamic } from "../data/DynamicConstant";
import { Basis } from "../ecs/decorators/Basis";
import { Required } from "../ecs/decorators/Required";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { VirtualCanvas } from "../rendering/VirtualCanvas";

@Basis(HealthDisplayComponent)
@Required([PositionComponent, HealthComponent])
export class HealthRenderSystem extends BaseSystem {
  constructor(private virtualCanvas: VirtualCanvas) {
    super();
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as HealthEntity & PositionEntity;

    const { position, health } = targetEntity.data;
    const pos = getDynamic(position.position);
    const northWest = pos.addConstant(-0.5, -0.5);
    const southEast = pos.addConstant(0.5, -0.4);
    const proportion = health.health / health.maxHealth;
    const southEast2 = pos.addConstant(proportion - 0.5, -0.4);
    this.virtualCanvas.drawWorldRectangle(
      northWest,
      southEast,
      "#ff000099",
      "#00000099"
    );
    this.virtualCanvas.drawWorldRectangle(
      northWest,
      southEast2,
      "#00ff0099",
      "#00000099"
    );
  }
}
