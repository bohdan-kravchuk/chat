import userRepository from '../repositories/userRepository';

export const getUsers = () => {
  return userRepository.getUsers();
};

export const createUser = ({ isOnline, ...userData }) => {
  return userRepository.createUser(userData);
};
