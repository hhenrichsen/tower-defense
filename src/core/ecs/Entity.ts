export class Entity {
  id: number;
  data: Record<string, Record<string, unknown>>;

  constructor(
    id: number,
    initialData?: Record<string, Record<string, unknown>>
  ) {
    this.id = id;
    this.data = initialData || {};
  }
}
