import { PositionComponent } from "../../core/components/data/Position";
import { getDynamic } from "../../core/data/DynamicConstant";
import { Entity } from "../../core/ecs/Entity";
import { BaseSystem } from "../../core/ecs/System";
import { VirtualCanvas } from "../../core/rendering/VirtualCanvas";
import TurretBaseComponent, {
  TurretBaseEntity,
} from "../components/BaseComponent";
import Vector2 from "../../core/geometry/Vector2";
import { FootprintComponent } from "../../core/components/data/Footprint";
import { Basis } from "../../core/ecs/decorators/Basis";
import { Required } from "../../core/ecs/decorators/Required";

@Basis(TurretBaseComponent)
@Required([FootprintComponent, PositionComponent])
export class TurretBaseRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const spriteEntity = entity as TurretBaseEntity;
    const { turretBase, footprint, position } = spriteEntity.data;
    this.virtualCanvas.drawImage(
      turretBase.source,
      getDynamic(position.position),
      Vector2.matching(footprint.size * 1.5)
    );
  }
}
