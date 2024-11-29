import { NumberValueObject } from '@Shared/domain/value-object/NumberValueObject';

export class ProductPrice extends NumberValueObject {
  constructor(value: number) {
    super(value);
    this.ensureLengthIsLimited(value);
  }

  private ensureLengthIsLimited(value: number): void {
    // The Product Price should not exceed the domain limit
    if (value > 1_000_000) {
      throw new Error(`The Product Price <${value}> is exceeding the limit of 1_000_000`);
    }
  }
}
