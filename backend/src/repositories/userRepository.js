import { User } from '../models/User';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  getByUserName(userName) {
    return this.collection.findOne({ userName }, 'userName avatarURI bio');
  }

  async createUser(userData) {
    const user = new this.collection(userData);
    await user.save();
    return user;
  }

  getAllExceptCurrent(userName) {
    return this.collection.find({ userName: { $ne: userName } });
  }
}

export default new UserRepository();
