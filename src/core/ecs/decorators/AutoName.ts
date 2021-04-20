import { Constructor } from "./Constructor";
import { lowerFirst } from "lodash";
import { Component } from "../Component";

export function AutoName(target: Constructor<Component>) {
  return class extends target {
    getName(): string {
      return lowerFirst(target.name);
    }
  };
}
