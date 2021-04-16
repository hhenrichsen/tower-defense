import { Entity } from "../../core/ecs/Entity";
import Vector2 from "../../core/geometry/Vector2";
import { Pathable } from "./Pathable";

export class GameMap implements Pathable {
  private positions: Map<string, Entity>;
  private minimumBound: Vector2;
  private maximumBound: Vector2;

  constructor(minimum: Vector2, maximum: Vector2) {
    this.positions = new Map();
    this.minimumBound = minimum;
    this.maximumBound = maximum;
  }

  public clear(): void {
    this.positions.clear();
  }

  public checkArea(northWest: Vector2, southEast: Vector2): boolean {
    for (let x = northWest.x; x < southEast.x; x++) {
      for (let y = northWest.y; y < southEast.y; y++) {
        if (this.hasEntityAt(northWest.addConstant(x, y))) {
          return false;
        }
      }
    }
    return true;
  }

  public getEntityAt(position: Vector2): Entity | null {
    if (this.positions.has(position.toString())) {
      return this.positions.get(position.toString());
    }
    return null;
  }

  public hasEntityAt(position: Vector2): boolean {
    return this.positions.has(position.toString());
  }

  public createEntityLink(position: Vector2, entity: Entity): void {
    this.positions.set(position.toString(), entity);
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

  isBlocked(v: Vector2): boolean {
    return this.hasEntityAt(v);
  }
}
