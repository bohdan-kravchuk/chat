import { User } from '../models/User';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  getUsers() {
    return this.collection.find({}, '_id userName avatarURI bio isOnline isBot chats');
  }

  async createUser(userData) {
    const user = new this.collection(userData);
    await user.save();
    return user;
  }
}

export default new UserRepository();
