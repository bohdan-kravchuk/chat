import { ObjectId } from 'bson';
import chatRepository from '../repositories/chatRepository';
import messageRepository from '../repositories/messageRepository';

export const createMessage = async (messageData) => {
  const message = await messageRepository.create(messageData);
  await chatRepository.addChatMessage(message.chatId, message.id);
  return message;
};

export const createSpamBotMessage = async (userId, spamBotId, content) => {
  const users = [new ObjectId(userId), new ObjectId(spamBotId)];
  const chat = await chatRepository.getChatByUserIds(users);
  const message = await messageRepository.create({
    userId: spamBotId,
    content,
    chatId: chat.id,
  });
  await chatRepository.addChatMessage(message.chatId, message.id);
  return message;
};
