import { MobilePhone } from '../models/mobile-phone.ts';
import { Bson } from 'mongo';

class mobilePhoneService {
  static async save(param: any) {
    return await MobilePhone.insertOne(param);
  }

  static async findAll(param: any) {
    return await MobilePhone.find(param).toArray();
  }

  static async findById(id: string) {
    return await MobilePhone.findOne({
      _id: new Bson.ObjectId(id)
    });
  }

  static async update(id: string, param: any) {
    const { matchedCount, modifiedCount, upsertedId } = await MobilePhone.updateOne({ _id: new Bson.ObjectId(id) }, { $set: param });
    return { matchedCount, modifiedCount, upsertedId };
  }

  static async deleteById(id: string) {
    return await MobilePhone.deleteOne({
      _id: new Bson.ObjectId(id)
    });
  }
}

export default mobilePhoneService;
