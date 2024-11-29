import { User } from './User';
import { Criteria } from '@Shared/domain/criteria/Criteria';

export interface UserRepository {
  save(product: User): Promise<void>;
  search(query: Criteria): Promise<Document[]>;
}
