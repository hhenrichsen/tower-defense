import { PathFollowerEntity } from "../../core/components/behavior/PathFollower";
import { HealthEntity } from "../../core/components/data/Health";
import { PositionEntity } from "../../core/components/data/Position";
import { Component } from "../../core/ecs/Component";
import { AutoName } from "../../core/ecs/decorators/AutoName";

export type CreepEntity = PositionEntity &
  HealthEntity &
  PathFollowerEntity & { data: { creep: CreepData } };

export interface CreepData {
  tags: Array<string>;
}
@AutoName
export class Creep extends Component {
  defaultData(): Record<string, unknown> {
    return { tags: ["ground"] };
  }
}

export const CreepComponent = new Creep();
export default CreepComponent;
