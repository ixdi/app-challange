import { DBLocal, DBLocalClient, DBLocalRepository } from '@Shared/infrastructure/persistence/db-local/DBLocalRepository';
import { User } from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import { Criteria } from '@/contexts/Shared/domain/criteria/Criteria';

export class DBLocalUserRepository extends DBLocalRepository<User> implements UserRepository {
  schemaCollection?: DBLocal;

  constructor(client: DBLocalClient) {
    super(client);
  }

  public async save(user: User): Promise<void> {
    const criteria = new Criteria({ userId: user.userId.value });
    return await this.upsert(user, criteria);
  }

  public async search(query: Criteria): Promise<Document[]> {
    return await this.find(query);
  }

  collectionName(): string {
    return 'products';
  }

  collection(): DBLocal {
    const client = this.client();
    this.schemaCollection = client("Users", {
      _id: { type: String, required: true },
      name: { type: String, required: true },
      password: { type: String, required: true },
      email: { type: String, required: true },
    })
    return this.schemaCollection as DBLocal;
  }
}
