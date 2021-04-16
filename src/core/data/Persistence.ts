export class PersistenceManager<T, R> {
  private initializer: (state: T) => R;
  private typeGuard: (obj: unknown) => boolean;
  private name: string;

  constructor(
    name: string,
    initializer: (state: T) => R,
    typeGuard?: (obj: unknown) => boolean
  ) {
    this.initializer = initializer;
    this.typeGuard = typeGuard;
    this.name = name;
  }

  get(state: T): R {
    if (localStorage.getItem(this.name) === null) {
      return this.getDefault(state);
    } else {
      const val = JSON.parse(localStorage.getItem(this.name));
      if (this.typeGuard && !this.typeGuard(val)) {
        console.warn(
          `Found invalid shape of persistent data ${this.name}, assigning to default.`
        );
        return Object.assign(this.getDefault(state), val);
      }
      return Object.assign(this.getDefault(state), val);
    }
  }

  private getDefault(state: T): R {
    const initState = this.initializer(state) as R;
    this.put(initState);
    return initState;
  }

  put(value: R): void {
    localStorage.setItem(this.name, JSON.stringify(value));
  }
}
