import { ECSManager } from "./ECSManager";
import { Entity } from "./Entity";

export interface EntityProducer {
  (parent: Entity, manager: ECSManager): void;
}
