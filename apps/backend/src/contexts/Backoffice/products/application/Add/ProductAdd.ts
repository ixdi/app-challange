import { ProductId } from '@Shared/domain/ProductId';
import { Product } from '../../domain/Product';
import { ProductDescription } from '../../domain/ProductDescription';
import { ProductName } from '../../domain/ProductName';
import { ProductPrice } from '../../domain/ProductPrice';
import { ProductRepository } from '../../domain/ProductRepository';

export class ProductCreator {
  constructor(private repository: ProductRepository) { }

  async run(params: { productId: ProductId; name: ProductName; description: ProductDescription, price: ProductPrice }): Promise<void> {
    const product = Product.create(params.productId, params.name, params.description, params.price);
    await this.repository.save(product);
  }
}
