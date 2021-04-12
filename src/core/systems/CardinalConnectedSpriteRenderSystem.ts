import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import { Component } from "../ecs/Component";
import { PositionComponent } from "../components/Position";
import { RotationComponent } from "../components/Rotation";
import { VirtualCanvas } from "../rendering/VirtualCanvas";
import CardinalConnectedSpriteComponent, {
  CardinalConnectedSpriteEntity,
} from "../components/CardinalConnectedSprite";
import { GameMap } from "../../content/types/GameMap";

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

  protected getBasisComponent(): Component | null {
    return CardinalConnectedSpriteComponent;
  }

  protected getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }

  protected getExcludedComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(RotationComponent);
    return set;
  }
}
