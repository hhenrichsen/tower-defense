import { Component } from "../Component";
import { BaseSystem } from "../System";
import { Constructor } from "./Constructor";

export const Basis = (
  basisComponent: Component
): ((target: Constructor<BaseSystem>) => void) => {
  return function (target: Constructor<BaseSystem>) {
    target.prototype.getBasisComponent = function (): Component {
      return basisComponent;
    };
  };
};
