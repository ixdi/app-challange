import { StringValueObject } from '@Shared/domain/value-object/StringValueObject';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export class UserPassword extends StringValueObject {

  constructor(value: string) {
    // Save the password hash
    const hash = bcrypt.hashSync(value, 10);
    super(hash);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    const passwordSchema = z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character" })

    passwordSchema.parse(value);
  }

  equalToString(password: string): boolean {
    return this.value === bcrypt.hashSync(password, 10);
  }
}
