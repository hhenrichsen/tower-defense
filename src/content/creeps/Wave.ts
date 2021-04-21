import { EntityProducer } from "../../core/ecs/EntityProducer";

export interface Wave {
  entity: EntityProducer;
  count: number;
}
