import { BaseGameModel } from "../data/BaseGameModel";
import { Component } from "./Component";
import { ECSManager } from "./ECSManager";
import { Entity } from "./Entity";

export interface System {
  update(elapsedTime: number, gameMode: BaseGameModel): void;
  notify(
    deltaTime: string,
    entity: Entity,
    data?: Record<string, unknown>
  ): void;
  setManager(manager: ECSManager): void;

  /**
   * @returns The component that triggers interest in an entity.
   */
  getBasisComponent(): Component | null;

  /**
   * @returns The components that must already be present on the entity.
   */
  getRequiredComponents(): Set<Component>;

  /**
   * @returns The components that must not be present on the entity.
   */
  getExcludedComponents(): Set<Component>;
}

export interface IntervalStorage {
  rate: number;
  elapsed: number;
}

export abstract class BaseSystem implements System {
  private entities: Set<Entity> = new Set();
  protected manager: ECSManager;

  protected checkInterval(deltaTime: number, data: IntervalStorage): boolean {
    data.elapsed += deltaTime;
    if (data.elapsed >= data.rate) {
      data.elapsed -= data.rate;
      return true;
    }
    return false;
  }

  public notify(
    notification: string,
    entity: Entity,
    data?: Record<string, unknown>
  ): void {
    if (notification === "__delete") {
      this.entities.delete(entity);
    }
    if (notification === "__remove_component") {
      const { componentName } = data;
      const basis = this.getBasisComponent();
      if (basis.getName() === componentName) {
        this.entities.delete(entity);
      }
    }
    if (this.checkBasis(notification, entity)) {
      if (this.isInterested(notification, entity)) {
        this.entities.add(entity);
        console.debug(
          `Adding ${notification} on entity ${entity.id} to tracking.`
        );
      }
    }
  }

  public setManager(manager: ECSManager): void {
    this.manager = manager;
  }

  protected checkBasis(componentName: string, entity: Entity): boolean {
    const required = this.getRequiredComponents();
    const excluded = this.getExcludedComponents();
    return (
      this.checkRequired(componentName, entity, required) &&
      this.checkExcluded(componentName, entity, excluded)
    );
  }

  protected checkRequired(
    componentName: string,
    entity: Entity,
    required: Set<Component>
  ): boolean {
    for (const requirement of required) {
      if (!(requirement.getName() in entity.data)) {
        console.warn(
          `Could not find required component ${requirement.getName()} while adding ${componentName}; this is a required component and ${componentName} will not trigger related systems' interest.`
        );
        return false;
      }
    }
    return true;
  }

  protected checkExcluded(
    componentName: string,
    entity: Entity,
    excluded: Set<Component>
  ): boolean {
    for (const exclusion of excluded) {
      if (exclusion.getName() in entity.data) {
        console.warn(
          `Found excluded component ${exclusion.getName()} while adding ${componentName}; this is an excluded component and ${componentName} will not trigger related systems' interest.`
        );
        return false;
      }
    }
    return true;
  }

  public update(deltaTime: number, model: BaseGameModel): void {
    this.systemUpdate(deltaTime, model);
    for (const entity of this.entities) {
      this.updateEntity(deltaTime, entity, model);
    }
  }

  protected systemUpdate(deltaTime: number, model: BaseGameModel): void {
    return;
  }

  /**
   * @returns The component that triggers interest in an entity.
   */
  getBasisComponent(): Component | null {
    return null;
  }

  /**
   * @returns The components that must already be present on the entity.
   */
  getRequiredComponents(): Set<Component> {
    return new Set();
  }

  /**
   * @returns The components that must not be present on the entity.
   */
  getExcludedComponents(): Set<Component> {
    return new Set();
  }

  protected isInterested(componentName: string, entity: Entity): boolean {
    return true;
  }

  protected abstract updateEntity(
    deltaTime: number,
    entity: Entity,
    mode: BaseGameModel
  ): void;
}
