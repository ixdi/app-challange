import { handleError } from '@Shared/domain/Error';
import dbLocal from 'db-local';

export class DBLocalConnection {
  private static client: unknown;

  constructor() {
    if (!DBLocalConnection.client) {
      this.setupClient();
    }
  }

  getClient(): unknown {
    return DBLocalConnection.client;
  }

  private setupClient(): void {
    try {
      const { Schema: client } = new dbLocal({
        path: './database'
      });
      DBLocalConnection.client = client;
    } catch (err) {
      console.log('ERROR Setting up Local Database');
      handleError(err);
    }
  }
}
