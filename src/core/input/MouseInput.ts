import Vector2 from "../geometry/Vector2";

export class MouseInput {
  public isLeftMouseDown = false;
  public isRightMouseDown = false;
  public mouseCoordinate: Vector2 = Vector2.ZERO;
}
