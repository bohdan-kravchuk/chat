import { chatHandlers } from './chatHandlers';
import { messageHandlers } from './messageHandlers';
import { userHandlers } from './userHandlers';

export const registerSockets = (socket) => {
  chatHandlers(socket);
  messageHandlers(socket);
  userHandlers(socket);
};
