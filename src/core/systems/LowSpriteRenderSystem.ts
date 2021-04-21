import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import LowSpriteComponent, {
  LowSpriteEntity,
} from "../components/rendering/LowSprite";
import { PositionComponent } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";
import { Basis } from "../ecs/decorators/Basis";
import { Required } from "../ecs/decorators/Required";

@Basis(LowSpriteComponent)
@Required([PositionComponent, RotationComponent])
export class LowSpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const spriteEntity = entity as LowSpriteEntity;
    const { lowSprite, position } = spriteEntity.data;
    this.virtualCanvas.drawImage(
      lowSprite.source,
      getDynamic(position.position).add(getDynamic(lowSprite.offset)),
      lowSprite.size
    );
  }
}
