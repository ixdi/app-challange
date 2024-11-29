import { Collection, MongoClient } from 'mongodb';
import { AggregateRoot } from '../AggregateRoot';
import { Criteria } from '../criteria/Criteria';
import { DBLocal } from '../../infrastructure/persistence/db-local/DBLocalRepository';

export interface IRepository {
  collectionName(): string;
  client(): MongoClient | ((col: string, schema: object) => DBLocal);
  collection(): Collection | DBLocal;
  upsert(aggregateRoot: AggregateRoot, query: Criteria): Promise<void>;
  find(query: Criteria): Promise<unknown>;
  delete(query: Criteria): Promise<void>;
  deleteMany(query: Criteria): Promise<void>;
}
