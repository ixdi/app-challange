import { MongoClientConnection } from "@Shared/infrastructure/persistence/mongo/MongoClientConnection";
import { describe, expect, test } from "vitest";

describe('MongoClientConnection', () => {
  test('should setup client', async () => {
    const client = new MongoClientConnection().getClient();
    expect(async () => {
      await client
        .db('admin')
        .command({ ping: 1 })
        .then(() => {
          console.log('Pinged connection. Successfully connected to MongoDB');
        })
    }).not.toThrow();
  });
});
