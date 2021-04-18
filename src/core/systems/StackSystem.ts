import { StackComponent, StackEntity } from "../components/behavior/Stack";
import { PositionComponent } from "../components/data/Position";
import { getDynamic } from "../data/DynamicConstant";
import { Component } from "../ecs/Component";
import { Entity } from "../ecs/Entity";
import { BaseSystem } from "../ecs/System";

export class StackSystem extends BaseSystem {
  protected onManagerAwake(): void {
    this.listen("stack:attach", false);
    this.listen("stack:detach");
    this.listen("stack:swap");
  }

  protected onEvent(
    event: string,
    entity: Entity,
    extra?: Record<string, unknown>
  ): void {
    if (event === "stack:attach") {
      this.handleAttach(entity, extra);
    }
    if (event === "stack:detach") {
      this.handleDetach(entity);
    }
    if (event === "stack:swap") {
      this.handleSwap(entity);
    }
  }

  private handleAttach(entity: Entity, extra?: Record<string, unknown>): void {
    console.debug("Attempting attach");
    console.debug(entity);
    console.debug(extra);
    const indexOffset = (extra["indexOffset"] as number) || 0;
    let parent = this.manager.getEntity(
      extra["parent"] as number
    ) as StackEntity;
    const originalParent = parent;
    if (parent === undefined || parent === null) {
      console.debug("Original parent is null.");
      return;
    }
    // Find lowest.
    while (parent !== null && parent.data.stack.child !== null) {
      parent = parent.data.stack.child as StackEntity;
    }
    // Allow offset.
    if (parent !== null) {
      for (let i = 0; i < indexOffset; i++) {
        parent = parent.data.stack.parent as StackEntity;
      }
    }

    if (parent === null) {
      if (originalParent !== null) {
        console.debug("Requested parent is null; trying original.");
        this.manager.emitEvent("stack:attach", entity, {
          parent: originalParent,
        });
      }
      return;
    }

    console.debug(`Attaching ${entity.id} to ${parent.id}`);
    const { position: parentPosition, stack: parentStack } = parent.data;
    if (!("stack" in entity.data)) {
      this.manager.addComponent(entity, StackComponent, {
        offset: parentStack.offset,
        index: parentStack.index + 1,
      });
    }
    const targetEntity = entity as StackEntity;
    const { position, stack } = targetEntity.data;
    position.position = getDynamic(parentPosition.position).add(
      getDynamic(parentStack.offset)
    );
    stack.parent = parent;
    this.manager.emitEvent("stack:attached", entity, { parent });
  }

  private handleSwap(entity: Entity): void {
    console.debug("Handling swap.");
    const targetEntity = entity as StackEntity;
    const { stack } = targetEntity.data;
    const parent = stack.parent;
    if (parent === null) {
      console.debug("Swap aborted; parent is null.");
      return;
    }
    const { stack: parentStack } = parent.data;
    stack.parent = parent.data.stack.parent;
    parentStack.child = stack.child;
    stack.child = parent;
    stack.index--;
    parentStack.index++;
    parentStack.parent = targetEntity;
    if (stack.parent !== null) {
      stack.parent.data.stack.child = targetEntity;
    }
    if (parentStack.child !== null) {
      parentStack.child.data.stack.parent = parent;
    }
  }

  private handleDetach(entity: Entity): void {
    if (!("stack" in entity.data)) {
      return;
    }
    const targetEntity = entity as StackEntity;
    const { stack } = targetEntity.data;
    if (stack.parent === null) {
      return;
    }
    const oldParent = stack.parent;
    stack.parent = null;
    stack.index = 0;
    oldParent.data.stack.child = null;
    this.manager.emitEvent("stack:detached", entity, { oldParent });
  }

  public updateEntity(deltaTime: number, entity: Entity): void {
    const targetEntity = entity as StackEntity;
    const { position, stack } = targetEntity.data;
    if (stack.parent === null) {
      return;
    }
    const { position: parentPosition } = stack.parent.data;
    position.position = getDynamic(parentPosition.position).add(
      getDynamic(stack.offset)
    );
  }

  getBasisComponent(): Component {
    return StackComponent;
  }

  getRequiredComponents(): Set<Component> {
    const set = new Set<Component>();
    set.add(PositionComponent);
    return set;
  }
}
