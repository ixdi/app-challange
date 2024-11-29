import { ProductId } from '@Shared/domain/ProductId';
import { Product } from '../../domain/Product';
import { ProductDescription } from '../../domain/ProductDescription';
import { ProductName } from '../../domain/ProductName';
import { ProductPrice } from '../../domain/ProductPrice';

export class UserRegister {
  constructor(private repository: UserRepository) { }

  async run(params: { userId: string; name: string; password: string, email: string }): Promise<void> {
    const product = User.fromPrimitives(params);
    await this.repository.save(product);
  }
}
