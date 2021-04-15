import Vector2 from "../geometry/Vector2";

export interface Pathable {
  isBlocked(v: Vector2): boolean;
}
