import { ObjectId } from 'mongodb';
import { Chat } from '../models/Chat';
import { Message } from '../models/Message';
import BaseRepository from './baseRepository';

class MessageRepository extends BaseRepository {
  constructor() {
    super(Message);
  }

  async getChatsMessages(chats) {
    const messageIds = chats
      .flatMap((chat) => chat.messages)
      .map((id) => new ObjectId(id));
    return this.collection.find({ _id: { $in: messageIds } });
  }
}

export default new MessageRepository();
