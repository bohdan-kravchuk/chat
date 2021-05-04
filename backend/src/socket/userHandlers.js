import { updateUser } from '../services/userService';

export const userHandlers = (socket) => {
  socket.on('user:initial', async (userId) => {
    socket.userId = userId;
    socket.join(userId);
    await updateUser(userId, { isOnline: true });
  });
  socket.on('disconnect', async () => {
    await updateUser(socket.userId, { isOnline: false });
  });
};
