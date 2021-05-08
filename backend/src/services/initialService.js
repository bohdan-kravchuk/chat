import CustomError from '../helpers/errorsHelper';
import chatRepository from '../repositories/chatRepository';
import messageRepository from '../repositories/messageRepository';
import userRepository from '../repositories/userRepository';

export const initial = async ({ userName }) => {
  const users = await userRepository.getAllExceptCurrent(userName);
  let currentUser = await userRepository.getByUserName(userName);
  if (!currentUser) {
    currentUser = await userRepository.create({ userName });
    await chatRepository.createChats(currentUser, users);
  }
  if (currentUser.isBot) {
    throw new CustomError(
      400,
      'This username is reserved for bot. Please choose another one.'
    );
  }
  const chats = await chatRepository.getChatsByUserId(currentUser.id);
  const messages = await messageRepository.getChatsMessages(chats);
  return { currentUser, users, chats, messages };
};
