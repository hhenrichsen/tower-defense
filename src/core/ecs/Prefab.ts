import { Component } from "./Component";
import DefaultManager, { ECSManager } from "./ECSManager";
import { Entity } from "./Entity";

export interface ComponentMutation {
  (component: Component, currentData: Record<string, unknown>): Record<
    string,
    unknown
  >;
}

export interface PrefabSpawner {
  (parent: Entity): Prefab;
}

export class Prefab {
  private components: Set<Component>;
  private mutators: Map<string, Array<ComponentMutation>>;
  constructor() {
    this.components = new Set();
    this.mutators = new Map();
  }

  public addComponent(component: Component): void {
    this.components.add(component);
  }

  public addMutator(componentName: string, mutator: ComponentMutation): void {
    if (!this.mutators.has(componentName)) {
      this.mutators.set(componentName, []);
    }
    this.mutators.get(componentName).push(mutator);
  }

  public create(target?: ECSManager): number {
    const manager = target || DefaultManager;
    const entityID = manager.createEntity();
    for (const component of this.components) {
      let data = component.init();
      const mutators = this.mutators.get(component.getName());
      if (mutators === undefined) {
        manager.addComponent(entityID, component, data);
        continue;
      }
      for (const mutator of mutators) {
        data = mutator(component, data);
      }
      manager.addComponent(entityID, component, data);
    }
    return entityID;
  }
}
