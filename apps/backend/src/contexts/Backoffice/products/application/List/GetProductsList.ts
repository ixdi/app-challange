import { ProductRepository } from '../../domain/ProductRepository';

export class ProductCreator {
  constructor(private repository: ProductRepository) { }

  async run(): Promise<Document[]> {
    return await this.repository.search({});
  }
}
