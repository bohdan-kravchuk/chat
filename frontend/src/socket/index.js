import { messageHandlers } from './messageHandlers';
import { userHandlers } from './userHandlers';

export const connectSocketHandlers = (socket) => {
  messageHandlers(socket);
  userHandlers(socket);
};
