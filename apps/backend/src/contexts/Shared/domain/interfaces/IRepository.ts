import { Collection, MongoClient } from 'mongodb';
import { AggregateRoot } from '../AggregateRoot';
import { Criteria } from '../criteria/Criteria';

export interface IRepository {
  collectionName(): string;
  client(): MongoClient;
  collection(): Collection;
  upsert(aggregateRoot: AggregateRoot, query: Criteria): Promise<void>;
  find(query: Criteria): Promise<unknown>;
  delete(query: Criteria): Promise<void>;
  deleteMany(query: Criteria): Promise<void>;
}
