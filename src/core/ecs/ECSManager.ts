import { BaseGameModel } from "../data/BaseGameModel";
import { Component } from "./Component";
import { Entity } from "./Entity";
import { System } from "./System";

export class ECSManager {
  private nextId = 0;
  private entities: Map<number, Entity>;
  private entityComponents: Map<string, Array<number>>;
  private systems: Map<number, Set<System>>;
  private interestedSystems: Map<string, Set<System>>;
  private allSystems: Set<System>;
  private systemOrder: Array<number>;
  private availableIDs: Array<number>;

  constructor() {
    this.entities = new Map();
    this.systems = new Map();
    this.entityComponents = new Map();
    this.allSystems = new Set();
    this.systemOrder = [];
    this.update = this.update.bind(this);
    this.getEntityIDsWithComponent = this.getEntityIDsWithComponent.bind(this);
    this.getEntitiesWithComponent = this.getEntitiesWithComponent.bind(this);
    this.interestedSystems = new Map();
    this.availableIDs = [];
  }

  public createEntity(
    initialData?: Record<string, Record<string, unknown>>
  ): number {
    if (this.availableIDs.length > 0) {
      const id = this.availableIDs.splice(0, 1)[0];
      console.debug(`Reusing ID ${id}`);
      const entity = this.entities.get(id);
      entity.data = initialData || {};
      entity.active = true;
      return id;
    } else {
      const id = this.nextId++;
      const entity = new Entity(id, initialData);
      this.entities.set(id, entity);
      return id;
    }
  }

  public createSystem(system: System, wave = 1): void {
    if (!this.systems.has(wave)) {
      this.systems.set(wave, new Set());
      this.systemOrder.push(wave);
      this.systemOrder.sort();
    }
    this.systems.get(wave).add(system);
    this.allSystems.add(system);
    const basis = system.getBasisComponent();
    if (basis !== null) {
      if (!this.interestedSystems.has(basis.getName())) {
        this.interestedSystems.set(basis.getName(), new Set());
      }
      this.interestedSystems.get(basis.getName()).add(system);
    }
    system.setManager(this);
  }

  public removeSystem(system: System): void {
    this.allSystems.delete(system);
    this.systems.forEach((systemSet) => {
      if (systemSet.has(system)) {
        systemSet.delete(system);
      }
    });
  }

  public hasComponent(entityID: number, component: Component): boolean {
    const entity = this.entities.get(entityID);
    return component.getName() in entity.data;
  }

  public addComponent(
    entityID: number,
    component: Component,
    initialData?: Record<string, unknown>
  ): void {
    if (entityID >= this.nextId || !this.entities.has(entityID)) {
      console.warn(
        `Trying to add component ${component.getName()} to non-existent entity ${entityID}`
      );
      return;
    }

    const entity = this.entities.get(entityID);
    if (!entity.active) {
      console.warn(
        `Trying to add component ${component.getName()} to non-existent entity ${entityID}`
      );
      return;
    }

    entity.data[component.getName()] = component.init(initialData);

    if (this.interestedSystems.get(component.getName()) !== undefined) {
      for (const system of this.interestedSystems.get(component.getName())) {
        system.notify(component.getName(), entity);
      }
    }

    if (!this.entityComponents.has(component.getName())) {
      this.entityComponents.set(component.getName(), []);
    }
    this.entityComponents.get(component.getName()).push(entityID);
  }

  public getEntity(entityID: number): Entity | null {
    if (this.entities.has(entityID)) {
      const entity = this.entities.get(entityID);
      return entity.active ? entity : null;
    }
    return null;
  }

  public getEntityIDsWithComponent(component: Component): Array<number> {
    const componentName = component.getName();
    if (this.entityComponents.has(componentName)) {
      const res: Array<number> = [];
      for (const id of this.entityComponents.get(componentName)) {
        res.push(id);
      }
      return res;
    }
    return [];
  }

  public getEntitiesWithComponent(component: Component): Array<Entity> {
    const componentName = component.getName();
    if (this.entityComponents.has(componentName)) {
      const res: Array<Entity> = [];
      for (const id of this.entityComponents.get(componentName)) {
        res.push(this.getEntity(id));
      }
      return res;
    }
    return [];
  }

  public removeComponent(entityID: number, component: Component): void {
    if (entityID >= this.nextId || !this.entities.has(entityID)) {
      console.warn(
        `Trying to remove component ${component.getName()} from non-existent entity ${entityID}`
      );
      return;
    }

    const entity = this.entities.get(entityID);
    if (!entity.active) {
      console.warn(
        `Trying to add component ${component.getName()} to non-existent entity ${entityID}`
      );
      return;
    }

    if (component.getName() in entity.data) {
      delete entity.data[component.getName()];
    }

    if (!this.entityComponents.has(component.getName())) {
      this.entityComponents.set(component.getName(), []);
    }

    this.entityComponents.set(
      component.getName(),
      this.entityComponents
        .get(component.getName())
        .filter((ent) => ent !== entityID)
    );

    if (this.interestedSystems.has(component.getName())) {
      const systems = this.interestedSystems.get(component.getName());
      for (const system of systems) {
        system.notify("__delete", this.entities.get(entityID));
      }
    }
  }

  public update(elapsedTime: number, model: BaseGameModel): void {
    for (const wave of this.systemOrder) {
      const systems = this.systems.get(wave);
      for (const system of systems) {
        system.update(elapsedTime, model);
      }
    }
  }

  public removeEntity(entityID: number): void {
    for (const system of this.allSystems) {
      system.notify("__delete", this.entities.get(entityID));
    }
    this.entities.get(entityID).data = {};
    this.entities.get(entityID).active = false;
    this.availableIDs.push(entityID);
  }

  clear(): void {
    // Notify all systems that we're done with this.
    for (const entityID of this.entities.keys()) {
      for (const system of this.allSystems) {
        system.notify("__delete", this.entities.get(entityID));
      }
    }
    // Actually remove the entity.
    for (const entityID of this.entities.keys()) {
      this.entities.delete(entityID);
    }
  }
}

export const DefaultManager = new ECSManager();
export default DefaultManager;
