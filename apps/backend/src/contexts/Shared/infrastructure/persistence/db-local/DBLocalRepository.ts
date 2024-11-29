import { AggregateRoot } from '@Shared/domain/AggregateRoot';
import { Criteria } from '@Shared/domain/criteria/Criteria';
import { IRepository } from '@Shared/domain/interfaces/IRepository';

export type DBLocal = {
  create: (query: Record<string, unknown>) => void;
  update: (doc: object) => void;
  find: (query: Record<string, unknown>) => Document[];
  findOne: (query: Record<string, unknown>) => DBLocal;
  remove: (query: Record<string, unknown>) => void;
}

export type DBLocalClient = (col: string, schema: object) => DBLocal;

export abstract class DBLocalRepository<T extends AggregateRoot> implements IRepository {
  constructor(private _client: DBLocalClient) {
  }

  abstract collectionName(): string;

  client(): DBLocalClient {
    return this._client;
  }

  abstract collection(): DBLocal

  async upsert(aggregateRoot: T, query: Criteria): Promise<void> {
    const collection = this.collection();

    const document: object = { ...aggregateRoot.toPrimitives() };

    const data = collection.findOne(query.getFilters());
    data.update(document);
  }

  async find(query: Criteria): Promise<Document[]> {
    const collection = this.collection();
    return collection.find(query.getFilters()) as Document[];
  }

  async delete(query: Criteria): Promise<void> {
    const collection = this.collection();
    collection.remove(query.getFilters());
  }

  async deleteMany(query: Criteria): Promise<void> {
    const collection = this.collection();
    if (!query.filter || Object.keys(query.getFilters()).length === 0) {
      throw new Error('The delete multiple must have at least a filter');
    }
    collection.remove(query.getFilters());
  }
}
