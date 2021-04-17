import { lowerFirst } from "lodash";
import { DynamicConstant } from "../../data/DynamicConstant";
import { Component } from "../../ecs/Component";
import Vector2 from "../../geometry/Vector2";
import { PositionEntity } from "../data/Position";

export type DraggableEntity = PositionEntity & {
  data: { draggable: DraggableData };
};

export interface DraggableData extends Record<string, unknown> {
  dragging: boolean;
  offset: DynamicConstant<Vector2>;
}

export class Draggable extends Component {
  protected defaultData(): DraggableData {
    return {
      dragging: false,
      offset: Vector2.ZERO,
    };
  }

  getName(): string {
    return lowerFirst(this.constructor.name);
  }
}

export const DraggableComponent = new Draggable();
export default DraggableComponent;
