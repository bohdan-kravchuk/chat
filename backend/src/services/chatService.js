import chatRepository from '../repositories/chatRepository';

export const getChat = (id) => {
  return chatRepository.getById(id);
};
