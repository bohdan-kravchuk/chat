import { getChat, getChatWithUsers } from '../services/chatService';
import { createMessage } from '../services/messageService';

const handleBotMessage = async (socket, companion, message) => {
  let botMessage;

  switch (companion.userName) {
    case 'Echo bot':
      botMessage = await createMessage({
        content: message.content,
        chatId: message.chatId,
        userId: companion.id,
      });
      socket.emit('message:get', botMessage);
      break;

    case 'Reverse bot':
      botMessage = await createMessage({
        content: message.content.split('').reverse().join(''),
        chatId: message.chatId,
        userId: companion.id,
      });
      setTimeout(() => socket.emit('message:get', botMessage), 3000);
      break;

    default:
      break;
  }
};

export const messageHandlers = (io, socket) => {
  socket.on('message:send', async (content, chatId) => {
    const message = await createMessage({ content, chatId, userId: socket.userId });
    const { users } = await getChatWithUsers(chatId);
    const companion = users.find(({ id }) => id.toString() !== socket.userId);
    users.forEach(({ id }) => {
      io.in(id.toString()).emit('message:get', message);
    });
    if (companion.isBot) {
      handleBotMessage(socket, companion, message);
    }
  });
  socket.on('message:typing', async (chatId) => {
    const chat = await getChat(chatId);
    if (!chat) return;
    const companionId = chat.users.find((userId) => userId.toString() != socket.userId);
    if (!companionId) return;
    socket.to(companionId.toString()).emit('message:typing', chatId);
  });
};
