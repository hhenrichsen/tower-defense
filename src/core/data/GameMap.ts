import { Entity } from "../../core/ecs/Entity";
import Vector2 from "../../core/geometry/Vector2";
import { ECSManager, EntityEvent } from "../ecs/ECSManager";
import { Pathable } from "./Pathable";

export class GameMap implements Pathable {
  private positions: Map<number, Entity>;
  private owners: Map<number, Set<number>>;
  private entities: Set<number>;
  private minimumBound: Vector2;
  private maximumBound: Vector2;
  private yScale: number;

  constructor(minimum: Vector2, maximum: Vector2, manager: ECSManager) {
    this.positions = new Map();
    this.owners = new Map();
    this.entities = new Set();
    this.minimumBound = minimum;
    this.maximumBound = maximum;
    this.yScale = this.maximumBound.x - this.minimumBound.x;
    manager.listenEvent("ecs:delete", this.listener.bind(this));
  }

  private getCoordinate(vector: Vector2): number {
    const x = vector.x - this.minimumBound.x;
    const y = vector.y - this.minimumBound.y;
    return y * (this.maximumBound.x - this.minimumBound.x) + x;
  }

  private listener(entityEvent: EntityEvent) {
    const entityID = entityEvent.entity.id;
    if (this.owners.has(entityID)) {
      const spaces = this.owners.get(entityID);
      for (const space of spaces) {
        this.positions.delete(space);
      }
      this.owners.delete(entityID);
    }
    this.entities.delete(entityID);
  }

  public clear(): void {
    this.positions.clear();
  }

  public checkArea(northWest: Vector2, southEast: Vector2): boolean {
    for (let y = northWest.y; y < southEast.y; y++) {
      for (let x = northWest.x; x < southEast.x; x++) {
        if (this.hasEntityAt(new Vector2(x, y))) {
          return false;
        }
      }
    }
    return true;
  }

  public getEntityAt(position: Vector2): Entity | null {
    const coord = this.getCoordinate(position);
    if (this.positions.has(coord)) {
      return this.positions.get(coord);
    }
    return null;
  }

  public hasEntityAt(position: Vector2): boolean {
    const coord = this.getCoordinate(position);
    return this.positions.has(coord);
  }

  public createEntityLink(position: Vector2, entity: Entity): void {
    if (!this.hasEntityAt(position)) {
      const coord = this.getCoordinate(position);
      this.positions.set(coord, entity);
      this.entities.add(entity.id);
      if (!this.owners.has(entity.id)) {
        this.owners.set(entity.id, new Set());
      }
      this.owners.get(entity.id).add(coord);
    } else {
      console.warn(`Overlapping entity at ${position.toString()}`);
    }
  }

  public region(northWest: Vector2, southEast: Vector2, entity: Entity): void {
    for (let y = northWest.y; y < southEast.y; y++) {
      for (let x = northWest.x; x < southEast.x; x++) {
        const loc = northWest.addConstant(x, y);
        this.createEntityLink(loc, entity);
      }
    }
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
