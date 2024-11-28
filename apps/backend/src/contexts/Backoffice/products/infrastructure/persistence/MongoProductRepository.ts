import { MongoRepository } from '@Shared/infrastructure/persistence/mongo/MongoRepository';
import { Product } from '../../domain/Product';
import { ProductRepository } from '../../domain/ProductRepository';
import { Criteria } from '@/contexts/Shared/domain/criteria/Criteria';
import { MongoClient } from 'mongodb';

export class MongoProductRepository extends MongoRepository<Product> implements ProductRepository {
  constructor(client: MongoClient) {
    super(client);
  }

  public async save(product: Product): Promise<void> {
    const criteria = new Criteria({ productId: product.productId.value });
    return await this.upsert(product, criteria);
  }

  public async search(query: Criteria): Promise<Document[]> {
    return await this.find(query);
  }

  collectionName(): string {
    return 'products';
  }
}
