import { handleError } from '@Shared/domain/Error';
import { MongoClient } from 'mongodb';

export class MongoClientConnection {
  private static client: MongoClient;

  constructor() {
    if (!MongoClientConnection.client) {
      this.setupClient();
    }
  }

  getClient(): MongoClient {
    return MongoClientConnection.client;
  }

  private setupClient(): void {
    try {
      const DATABASE_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017';
      const client = new MongoClient(DATABASE_URI, {
        appName: 'Backend Node Challenge',
        compressors: 'zstd',
        heartbeatFrequencyMS: 10000,
        maxIdleTimeMS: 30000,
        minPoolSize: 1,
        maxPoolSize: 40,
        maxConnecting: 5,
        tls: true,
      });
      MongoClientConnection.client = client;
    } catch (err) {
      console.log('ERROR Setting up MONGO Client');
      handleError(err);
    }
  }

  async openConnection(): Promise<MongoClient> {
    try {
      // Connect the client to the server (optional starting in v4.7)
      // If it's not call then it will be called when the first db operation is executed
      await MongoClientConnection.client.connect();
    } catch (err) {
      handleError(err);
    }
    return MongoClientConnection.client;
  }

  async closeConnection() {
    function timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    try {
      // Ensures that the client will close the connection when finish/error
      // Without the timeout the build process fails
      await timeout(1500);
      await MongoClientConnection.client.close();
    } catch (err) {
      handleError(err);
    }
  }
}
