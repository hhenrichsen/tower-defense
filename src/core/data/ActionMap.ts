export interface ActionHandler {
  (action: Action, data?: Record<string, unknown>): void;
}

export class Action {
  public _name: string;
  private handlers: Array<ActionHandler> = [];

  constructor(name: string) {
    this._name = name;
  }

  public addHandler(handler: ActionHandler): void {
    this.handlers.push(handler);
  }

  public invoke(data?: Record<string, unknown>): void {
    for (let handler = 0; handler < this.handlers.length; handler++) {
      this.handlers[handler](this, data);
    }
  }

  public get name(): string {
    return this._name;
  }
}

export interface ImmutableActionMap {
  invoke(name: string, data?: Record<string, unknown>): void;
}

export class ActionMap {
  private actions: Map<string, Action>;
  private serializeActions: Array<string>;

  constructor() {
    this.actions = new Map();
    this.serializeActions = [];
  }

  public createAction(name: string, serialize = false): void {
    const action = new Action(name);
    this.actions.set(name, action);
    if (serialize) {
      this.serializeActions.push(name);
    }
  }

  public addHandler(name: string, handler: ActionHandler): void {
    if (!this.actions.has(name)) {
      console.warn("Trying to add a handler on a nonexistent action.");
      return;
    }
    this.actions.get(name).addHandler(handler);
  }

  public invoke(name: string, data?: Record<string, unknown>): void {
    if (!this.actions.has(name)) {
      return;
    }

    this.actions.get(name).invoke(data);
  }

  public serialize(): Array<string> {
    return [...this.serializeActions];
  }

  public asImmutable(): ImmutableActionMap {
    return this;
  }
}
