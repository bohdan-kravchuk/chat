import { Chat } from '../models/Chat';
import BaseRepository from './baseRepository';

class ChatRepository extends BaseRepository {
  constructor() {
    super(Chat);
  }

  createChats(currentUser, users) {
    const chats = users.map(
      (user) => new this.collection({ users: [currentUser.id, user.id] })
    );
    return this.collection.insertMany(chats);
  }

  getManyByUserId(userId) {
    return this.collection.find({ users: userId });
  }
}

export default new ChatRepository();
