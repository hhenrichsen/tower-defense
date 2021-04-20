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
export function circleLineCollision(
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

export function circlePointCollision(circle: Circle, point: Vector2): boolean {
  return PointRadiusPointCollision(circle.center, circle.radius, point);
}

export function PointRadiusPointCollision(
  point1: Vector2,
  radius: number,
  point2: Vector2
): boolean {
  return Vector2.distance(point1, point2) <= radius;
}

export function rectPointCollision(
  nw1: Vector2,
  se1: Vector2,
  pt: Vector2
): boolean {
  return pt.x >= nw1.x && pt.x <= se1.x && pt.y >= nw1.y && pt.y <= se1.y;
}

export function rectRectCollision(
  nw1: Vector2,
  se1: Vector2,
  nw2: Vector2,
  se2: Vector2
): boolean {
  return nw1.x <= se2.x && se1.x >= nw2.x && nw1.y <= se2.y && se1.x >= nw2.y;
}
