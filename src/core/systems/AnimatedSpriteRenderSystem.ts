import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/Position";
import { RotationComponent } from "../components/Rotation";
import AnimatedSpriteComponent, {
  AnimatedSpriteEntity,
} from "../components/AnimatedSprite";
import { VirtualCanvas } from "../rendering/VirtualCanvas";

export class AnimatedSpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as AnimatedSpriteEntity;
    const { animatedsprite, rotation, position } = targetEntity.data;
    animatedsprite.currentDuration += deltaTime;
    if (
      animatedsprite.currentDuration >
      animatedsprite.frames[animatedsprite.frame]
    ) {
      animatedsprite.currentDuration -=
        animatedsprite.frames[animatedsprite.frame];
      animatedsprite.frame =
        (animatedsprite.frame + 1) % animatedsprite.frames.length;
    }
    this.virtualCanvas.drawImageAnimated(
      animatedsprite.source,
      position.position,
      rotation.rotation,
      animatedsprite.size,
      animatedsprite.frameSize,
      animatedsprite.frame
    );
  }

  protected getBasisComponent(): Component | null {
    return AnimatedSpriteComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationComponent);
    return set;
  }
}
