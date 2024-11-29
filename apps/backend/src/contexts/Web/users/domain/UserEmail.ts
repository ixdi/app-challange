import { StringValueObject } from '@Shared/domain/value-object/StringValueObject';
import { z } from 'zod';

export class UserEmail extends StringValueObject {

  constructor(value: string) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    const emailSchema = z
      .string()
      .email({ message: "Invalid email address format" });

    emailSchema.parse(value);
  }
}
