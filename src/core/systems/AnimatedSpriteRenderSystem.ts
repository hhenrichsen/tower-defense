import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/Position";
import { RotationComponent } from "../components/Rotation";
import AnimatedSpriteComponent, {
  AnimatedSpriteEntity,
} from "../components/AnimatedSprite";
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
    const { animatedsprite, rotation, position } = targetEntity.data;
    animatedsprite.currentDuration += deltaTime;
    while (
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
      getDynamic(position.position),
      getDynamic(rotation.rotation),
      animatedsprite.size,
      animatedsprite.frameSize,
      animatedsprite.frame,
      getDynamic(animatedsprite.opacity)
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
