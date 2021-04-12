// eslint-disable-next-line @typescript-eslint/ban-types
export type DynamicConstant<T> = T extends Function ? never : T | (() => T);

export function getDynamic<T>(dc: DynamicConstant<T>): T {
  return typeof dc === "function" ? dc() : dc;
}
