import { Pathfinder } from "../core/data/Pathfinder";
import { Direction } from "../core/geometry/Direction";
import Vector2 from "../core/geometry/Vector2";
import { GameModel } from "./GameModel";

export class PathChecker {
  private southEnd = new Set<Vector2>();
  private eastEnd = new Set<Vector2>();

  constructor(private model: GameModel) {
    this.southEnd.add(new Vector2(19, 30));
    this.southEnd.add(new Vector2(20, 30));
    this.southEnd.add(new Vector2(21, 30));
    this.southEnd.add(new Vector2(22, 30));
    this.southEnd.add(new Vector2(23, 30));
    this.eastEnd.add(new Vector2(39, 13));
    this.eastEnd.add(new Vector2(39, 14));
    this.eastEnd.add(new Vector2(39, 15));
    this.eastEnd.add(new Vector2(39, 16));
    this.eastEnd.add(new Vector2(39, 17));
  }

  findEastWest(blocked: Set<Vector2>, compress = false): Array<Vector2> {
    const eastWestPath = Pathfinder.findPath(
      this.model.getMap(),
      new Vector2(10, 15),
      this.eastEnd,
      Direction.getAllCardinal(),
      new Vector2(10, 0),
      this.model.getVirtualSize(),
      blocked,
      compress
    );
    return eastWestPath;
  }

  findNorthSouth(blocked: Set<Vector2>, compress = false): Array<Vector2> {
    const northSouthPath = Pathfinder.findPath(
      this.model.getMap(),
      new Vector2(25, 0),
      this.southEnd,
      Direction.getAllCardinal(),
      new Vector2(10, 0),
      this.model.getVirtualSize(),
      blocked,
      compress
    );
    return northSouthPath;
  }
}
