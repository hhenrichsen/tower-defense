import Vector2 from "../geometry/Vector2";

export class Direction {
  static readonly NORTH = new Direction(new Vector2(0, -1));
  static readonly NORTHEAST = new Direction(new Vector2(1, -1));
  static readonly EAST = new Direction(new Vector2(1, 0));
  static readonly SOUTHEAST = new Direction(new Vector2(1, 1));
  static readonly SOUTH = new Direction(new Vector2(0, 1));
  static readonly SOUTHWEST = new Direction(new Vector2(-1, 1));
  static readonly WEST = new Direction(new Vector2(-1, 0));
  static readonly NORTHWEST = new Direction(new Vector2(-1, -1));

  public readonly offset: Vector2;
  private constructor(offset: Vector2) {
    this.offset = offset;
  }

  private static all: Set<Direction> = undefined;
  private static cardinal: Set<Direction> = undefined;

  public static getAllCardinal(): Set<Direction> {
    if (this.cardinal === undefined) {
      this.cardinal = new Set();
      this.cardinal.add(this.NORTH);
      this.cardinal.add(this.EAST);
      this.cardinal.add(this.SOUTH);
      this.cardinal.add(this.WEST);
    }
    return this.cardinal;
  }

  public static getAllDirections(): Set<Direction> {
    if (this.all === undefined) {
      this.all = new Set();
      this.all.add(this.NORTH);
      this.all.add(this.NORTHEAST);
      this.all.add(this.EAST);
      this.all.add(this.SOUTHEAST);
      this.all.add(this.SOUTH);
      this.all.add(this.SOUTHWEST);
      this.all.add(this.WEST);
      this.all.add(this.NORTHWEST);
    }
    return this.all;
  }
}
