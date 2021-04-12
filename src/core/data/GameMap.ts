import { Entity } from "../../core/ecs/Entity";
import Vector2 from "../../core/geometry/Vector2";

export class GameMap {
  private positions: Map<Vector2, Entity>;
  private minimumBound: Vector2;
  private maximumBound: Vector2;

  public getEntityAt(position: Vector2): Entity | null {
    if (this.positions.has(position)) {
      return this.positions.get(position);
    }
    return null;
  }

  public hasEntityAt(position: Vector2): boolean {
    return this.positions.has(position);
  }

  public createEntityLink(position: Vector2, entity: Entity): void {
    this.positions.set(position, entity);
  }

  public getNeighbors(position: Vector2): Array<Entity> {
    const { x, y } = position;
    const results: Array<Entity> = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        // Skip out of bounds
        if (x + dx > this.maximumBound.x || x + dx < this.minimumBound.x) {
          continue;
        }
        if (y + dy > this.maximumBound.y || y + dy < this.minimumBound.y) {
          continue;
        }
        // Skip self
        if (x == 0 && y == 0) {
          continue;
        }
        const neighborCoordinate = new Vector2(x + dx, y + dy);
        if (!this.hasEntityAt(neighborCoordinate)) {
          continue;
        }
        results.push(this.getEntityAt(neighborCoordinate));
      }
    }
    return results;
  }
}
