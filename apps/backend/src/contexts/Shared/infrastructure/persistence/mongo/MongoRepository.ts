import { Collection, MongoClient } from 'mongodb';
import { AggregateRoot } from '@Shared/domain/AggregateRoot';
import { Criteria } from '@Shared/domain/criteria/Criteria';
import { IRepository } from '@Shared/domain/interfaces/IRepository';

export abstract class MongoRepository<T extends AggregateRoot> implements IRepository {
  constructor(private _client: MongoClient) {
  }

  abstract collectionName(): string;

  client(): MongoClient {
    return this._client;
  }

  collection(): Collection {
    return this._client.db().collection(this.collectionName());
  }

  async upsert(aggregateRoot: T, query: Criteria): Promise<void> {
    const collection = this.collection();

    const document = { ...aggregateRoot.toPrimitives() };

    await collection.updateOne(query.getFilters(), { $set: document }, { upsert: true, ...query.getOptions() });
  }

  async find(query: Criteria): Promise<Document[]> {
    const collection = this.collection();

    return await collection.find<Document>(query.getFilters(), query.getOptions()).sort(query.getSort()).skip(query.getSkip()).limit(query.getLimit()).toArray();
  }

  async delete(query: Criteria): Promise<void> {
    const collection = this.collection();

    await collection.deleteOne(query.getFilters(), query.getOptions());
  }

  async deleteMany(query: Criteria): Promise<void> {
    const collection = this.collection();
    if (!query.filter || Object.keys(query.getFilters()).length === 0) {
      throw new Error('The delete multiple must have at least a filter');
    }
    await collection.deleteMany(query.getFilters(), query.getOptions());
  }
}
