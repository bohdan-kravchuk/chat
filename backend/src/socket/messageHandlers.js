import { getChat } from '../services/chatService';
import { createMessage } from '../services/messageService';

export const messageHandlers = (io, socket) => {
  socket.on('message:send', async (content, chatId) => {
    const message = await createMessage({ content, chatId, userId: socket.userId });
    const { users } = await getChat(chatId);
    users.forEach((userId) => {
      io.in(userId.toString()).emit('message:get', message);
    });
  });
};
