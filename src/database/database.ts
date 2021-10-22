import { MongoClient } from 'https://deno.land/x/mongo/mod.ts';
// import { MobilePhoneSchema } from '../models/mobile-phone.ts';

const client = new MongoClient();
await client.connect('mongodb://test_user:123456@121.37.188.31:16380/testdb');

export default client;

// const db = client.database("test");
// const users = db.collection<UserSchema>("users");
