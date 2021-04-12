import Vector2 from "./Vector2";
import Circle from "./Circle";

/**
 * Line-Circle Intersection
 * @source https://stackoverflow.com/questions/37224912/circle-line-segment-collision
 *
 * @param circle The circle to test for intersection.
 * @param pt1 The first point of the line.
 * @param pt2 The second point of the line.
 */
export function isColliding(
  circle: Circle,
  pt1: Vector2,
  pt2: Vector2
): boolean {
  const v1 = new Vector2(pt2.x - pt1.x, pt2.y - pt1.y);
  const v2 = new Vector2(pt1.x - circle.center.x, pt1.y - circle.center.y);
  const b = -2 * (v1.x * v2.x + v1.y * v2.y);
  const c = 2 * (v1.x * v1.x + v1.y * v1.y);
  const d = Math.sqrt(
    b * b - 2 * c * (v2.x * v2.x + v2.y * v2.y - circle.radius * circle.radius)
  );
  if (isNaN(d)) {
    // no intercept
    return false;
  }
  // These represent the unit distance of point one and two on the line
  const u1 = (b - d) / c;
  const u2 = (b + d) / c;
  if (u1 <= 1 && u1 >= 0) {
    // If point on the line segment
    return true;
  }
  if (u2 <= 1 && u2 >= 0) {
    // If point on the line segment
    return true;
  }
  return false;
}
