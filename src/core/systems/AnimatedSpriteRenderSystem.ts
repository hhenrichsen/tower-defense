import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import AnimatedSpriteComponent, {
  AnimatedSpriteEntity,
} from "../components/rendering/AnimatedSprite";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";

export class AnimatedSpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as AnimatedSpriteEntity;
    const { animatedSprite, rotation, position } = targetEntity.data;
    animatedSprite.currentDuration += deltaTime;
    while (
      animatedSprite.currentDuration >
      animatedSprite.frames[animatedSprite.frame]
    ) {
      animatedSprite.currentDuration -=
        animatedSprite.frames[animatedSprite.frame];
      animatedSprite.frame =
        (animatedSprite.frame + 1) % animatedSprite.frames.length;
    }
    this.virtualCanvas.drawImageAnimated(
      animatedSprite.source,
      getDynamic(position.position),
      getDynamic(rotation.rotation),
      animatedSprite.size,
      animatedSprite.frameSize,
      animatedSprite.frame,
      getDynamic(animatedSprite.opacity)
    );
  }

  getBasisComponent(): Component | null {
    return AnimatedSpriteComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationComponent);
    return set;
  }
}
