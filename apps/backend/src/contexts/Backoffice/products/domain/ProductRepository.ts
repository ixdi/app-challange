import { Product } from './Product';
import { Criteria } from '@Shared/domain/criteria/Criteria';

export interface ProductRepository {
  save(product: Product): Promise<void>;
  search(query: Criteria): Promise<Document[]>;
}
