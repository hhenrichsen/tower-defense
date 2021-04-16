import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/data/Position";
import { RotationComponent } from "../components/data/Rotation";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import CardinalConnectedSpriteComponent, {
  CardinalConnectedSpriteEntity,
} from "../components/rendering/CardinalConnectedSprite";
import { GameMap } from "../data/GameMap";

export class AnimatedSpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;

  constructor(virtualCanvas: VirtualCanvas, map: GameMap) {
    super();
    this.virtualCanvas = virtualCanvas;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as CardinalConnectedSpriteEntity;
    const { cardinalconnectedsprite, rotation, position } = targetEntity.data;
  }

  getBasisComponent(): Component | null {
    return CardinalConnectedSpriteComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }

  getExcludedComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(RotationComponent);
    return set;
  }
}
