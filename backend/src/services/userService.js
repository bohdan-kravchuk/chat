import userRepository from '../repositories/userRepository';

export const createUser = ({ isOnline, ...userData }) => {
  return userRepository.create(userData);
};

export const getUser = ({ userName }) => {
  return userRepository.getByUserName(userName);
};

export const updateUser = (id, userData) => {
  return userRepository.updateUser(id, userData);
};
