import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import SpriteComponent, { SpriteEntity } from "../components/rendering/Sprite";
import { PositionComponent } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";
import { Basis } from "../ecs/decorators/Basis";
import { Required } from "../ecs/decorators/Required";

@Basis(SpriteComponent)
@Required([PositionComponent, RotationComponent])
export class SpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const spriteEntity = entity as SpriteEntity;
    const { sprite, rotation, position } = spriteEntity.data;
    this.virtualCanvas.drawImage(
      sprite.source,
      getDynamic(position.position).add(getDynamic(sprite.offset)),
      sprite.size,
      getDynamic(rotation.rotation) + getDynamic(sprite.rotationOffset),
      getDynamic(sprite.opacity)
    );
  }
}
