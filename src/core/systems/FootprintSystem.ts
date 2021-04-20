import {
  FootprintComponent,
  FootprintEntity,
} from "../components/data/Footprint";
import { PositionComponent } from "../components/data/Position";
import { getDynamic } from "../data/DynamicConstant";
import { GameMap } from "../data/GameMap";
import { Basis } from "../ecs/decorators/Basis";
import { Required } from "../ecs/decorators/Required";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";
import Vector2 from "../geometry/Vector2";

@Basis(FootprintComponent)
@Required([PositionComponent])
export class FootprintSystem extends BaseSystem {
  private map: GameMap;

  constructor(map: GameMap) {
    super();
    this.map = map;
  }

  protected updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as FootprintEntity;
    const { position, footprint } = targetEntity.data;
    if (!footprint.tracked) {
      footprint.tracked = true;
      const pos = getDynamic(position.position).floor();

      const nwOffset = Math.floor((footprint.size - 1) / 2) - 1;
      const northWest = new Vector2(pos.x - nwOffset, pos.y - nwOffset);
      const swOffset = Math.floor(footprint.size / 2) + 1;
      const southEast = new Vector2(pos.x + swOffset, pos.y + swOffset);
      for (let x = northWest.x; x <= southEast.x; x++) {
        for (let y = northWest.y; y <= southEast.y; y++) {
          this.map.createEntityLink(new Vector2(x, y), entity);
        }
      }
    }
  }
}
