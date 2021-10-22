import client from '../database/database.ts';

// Defining schema interface
export interface MobilePhoneSchema {
  _id: { $oid: string };
  model_name: string;
  size: string;
  spec: string;
  ram: number;
  rom: number;
  seria_number: string;
}

const db = client.database('testdb');
export const MobilePhone = db.collection<MobilePhoneSchema>('mobile-phone');

// export { MobilePhoneSchema, MobilePhone };
