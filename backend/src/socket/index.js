import { updateUser } from '../services/userService';
import { chatHandlers } from './chatHandlers';
import { messageHandlers } from './messageHandlers';
import { userHandlers } from './userHandlers';

const onConnection = async (socket) => {
  console.log('socket connected');
  const { userId } = socket.handshake.query;
  socket.userId = userId;
  socket.join(userId);
  const user = await updateUser(userId, { isOnline: true });
  socket.broadcast.emit('user:update', user);
};

export const registerSockets = (io, socket) => {
  onConnection(socket);
  chatHandlers(io, socket);
  messageHandlers(io, socket);
  userHandlers(io, socket);
};
