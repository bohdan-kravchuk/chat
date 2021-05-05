import chatRepository from '../repositories/chatRepository';
import messageRepository from '../repositories/messageRepository';

export const createMessage = async (messageData) => {
  const message = await messageRepository.create(messageData);
  await chatRepository.addChatMessage(message.chatId, message.id);
  return message;
};
