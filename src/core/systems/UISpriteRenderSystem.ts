import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import UISpriteComponent, { UISpriteEntity } from "../components/ui/UISprite";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import { getDynamic } from "../data/DynamicConstant";

export class UISpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const spriteEntity = entity as UISpriteEntity;
    const { sprite, rotation, position } = spriteEntity.data;
    this.virtualCanvas.drawImage(
      sprite.source,
      getDynamic(position.position),
      sprite.size,
      getDynamic(rotation.rotation),
      getDynamic(sprite.opacity)
    );
  }

  getBasisComponent(): Component | null {
    return UISpriteComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    set.add(RotationComponent);
    return set;
  }
}
