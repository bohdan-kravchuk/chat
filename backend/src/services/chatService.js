import chatRepository from '../repositories/chatRepository';

export const getChat = (id) => {
  return chatRepository.getById(id);
};

export const getChatWithUsers = (id) => {
  return chatRepository.getChatWithUsers(id);
};
