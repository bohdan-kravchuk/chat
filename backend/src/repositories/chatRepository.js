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

  addChatMessage(_id, messageId) {
    return this.collection.updateOne({ _id }, { $push: { messages: messageId } });
  }

  getChatsByUserId(userId) {
    return this.collection.find({ users: userId });
  }

  getChatByUserIds(users) {
    return this.collection.findOne({ users: { $all: users } });
  }

  getChatWithUsers(_id) {
    return this.collection.findOne({ _id }).populate('users').exec();
  }
}

export default new ChatRepository();
