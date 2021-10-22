import { MongoClient } from '../deps.ts';

const client = new MongoClient();
await client.connect('mongodb://test_user:123456@121.37.188.31:16380/testdb');

export default client;
