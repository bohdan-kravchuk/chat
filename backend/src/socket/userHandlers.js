import { updateUser } from '../services/userService';

export const userHandlers = (io, socket) => {
  socket.on('disconnect', async () => {
    const user = await updateUser(socket.userId, { isOnline: false });
    socket.broadcast.emit('user:update', user);
  });
};
