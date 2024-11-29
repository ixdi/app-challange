import { Product } from '../../domain/Product';
import { ProductRepository } from '../../domain/ProductRepository';

export class ProductCreator {
  constructor(private repository: ProductRepository) { }

  async run(params: { productId: string; name: string; description: string, price: number }): Promise<void> {
    const product = Product.fromPrimitives(params);
    await this.repository.save(product);
  }
}
