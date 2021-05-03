import userRepository from '../repositories/userRepository';

export const createUser = ({ isOnline, ...userData }) => {
  return userRepository.createUser(userData);
};

export const getUser = ({ userName }) => {
  return userRepository.getByUserName(userName);
};
