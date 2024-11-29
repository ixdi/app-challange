import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { UserId } from '@Shared/domain/UserId';
import { UserPassword } from './UserPassword';
import { UserName } from './UserName';
import { UserEmail } from './UserEmail';

export class User extends AggregateRoot {
  readonly userId: UserId;
  readonly name: UserName;
  readonly password: UserPassword;
  readonly email: UserEmail;

  constructor(plainData: { userId: string, name: string, description: string, price: number }) {
    super();
    this.userId = new UserId(plainData.userId);
    this.name = new UserName(plainData.name);
    this.description = new UserDescription(plainData.description);
    this.price = new UserPrice(plainData.price);
  }

  static fromPrimitives(plainData: { userId: string; name: string; description: string, price: number }): User {
    return new User(plainData);
  }

  toPrimitives(): object {
    return {
      id: this.userId.value,
      name: this.name.value,
      description: this.description.value,
      price: this.price.value
    };
  }
}
