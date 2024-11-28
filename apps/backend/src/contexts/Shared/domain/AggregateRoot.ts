export abstract class AggregateRoot {
  constructor() {
  }

  abstract toPrimitives(): object;
}
