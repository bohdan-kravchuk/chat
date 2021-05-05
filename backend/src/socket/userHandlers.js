import { updateUser } from '../services/userService';

export const userHandlers = (io, socket) => {
  socket.on('disconnect', async () => {
    console.log('socket disconnected');
    await updateUser(socket.userId, { isOnline: false });
  });
};
