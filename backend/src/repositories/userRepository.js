import { User } from '../models/User';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  getByUserName(userName) {
    return this.collection.findOne({ userName }, 'userName avatarURI bio');
  }

  updateUser(_id, userData) {
    return this.updateById(_id, userData);
  }

  getAllExceptCurrent(userName) {
    return this.collection.find({ userName: { $ne: userName } });
  }
}

export default new UserRepository();
