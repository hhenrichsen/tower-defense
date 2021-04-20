import { Component } from "../Component";
import { BaseSystem } from "../System";
import { Constructor } from "./Constructor";

export const Required = (
  components: Array<Component>
): ((target: Constructor<BaseSystem>) => void) => {
  return function (target: Constructor<BaseSystem>) {
    const set = new Set<Component>();
    for (let i = 0; i < components.length; i++) {
      set.add(components[i]);
    }
    target.prototype.getRequiredComponents = function (): Set<Component> {
      return set;
    };
  };
};
