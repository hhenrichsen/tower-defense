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
import { getDynamic } from "../data/DynamicConstant";

export class CardinalConnectedSpriteRenderSystem extends BaseSystem {
  private readonly virtualCanvas: VirtualCanvas;
  private map: GameMap;

  constructor(virtualCanvas: VirtualCanvas, map: GameMap) {
    super();
    this.virtualCanvas = virtualCanvas;
    this.map = map;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as CardinalConnectedSpriteEntity;
    const { cardinalConnectedSprite, position } = targetEntity.data;
    const pos = getDynamic(position.position);
    const count = 0;
    // const neighbors = this.map.getNeighbors(pos);
    this.virtualCanvas.drawImage(
      cardinalConnectedSprite.provider.getSprite(count),
      pos,
      cardinalConnectedSprite.size
    );
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
