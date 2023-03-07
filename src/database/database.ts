import { MongoClient } from 'mongo';

const client = new MongoClient();
await client.connect('mongodb://test_user:123456@10.211.55.58:16380/testdb');

export default client;
