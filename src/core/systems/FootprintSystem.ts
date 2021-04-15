import { FootprintComponent, FootprintEntity } from "../components/Footprint";
import { PositionComponent } from "../components/Position";
import { BaseGameModel } from "../data/BaseGameModel";
import { getDynamic } from "../data/DynamicConstant";
import { GameMap } from "../data/GameMap";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

export class FootprintSystem extends BaseSystem {
  private map: GameMap;

  constructor(map: GameMap) {
    super();
    this.map = map;
  }

  protected systemUpdate(deltaTime: number, model: BaseGameModel): void {
    this.map.clear();
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as FootprintEntity;
    const { position, footprint } = targetEntity.data;
    const pos = getDynamic(position.position);

    const nwOffset = Math.floor(footprint.size / 2 - 1);
    const northWest = new Vector2(pos.x + nwOffset, pos.y + nwOffset);
    const swOffset = Math.floor(footprint.size / 2);
    const southEast = new Vector2(pos.x + swOffset, pos.y + swOffset);
    for (let x = northWest.x; x <= southEast.x; x++) {
      for (let y = northWest.y; y <= southEast.y; y++) {
        this.map.createEntityLink(new Vector2(x, y), entity);
      }
    }
  }

  private checkRelativeThreshold(
    a: Vector2,
    b: Vector2,
    threshold: number
  ): boolean {
    return Math.abs(a.x - b.x) < threshold && Math.abs(a.y - b.y) < threshold;
  }

  getBasisComponent(): Component {
    return FootprintComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
