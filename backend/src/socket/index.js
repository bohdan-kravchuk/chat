import { messages } from '../configs/messages';
import { spamBotConfig } from '../configs/spamBot';
import { getRandomInt } from '../helpers/numberHelper';
import { createSpamBotMessage } from '../services/messageService';
import { getUser, updateUser } from '../services/userService';
import { chatHandlers } from './chatHandlers';
import { messageHandlers } from './messageHandlers';
import { userHandlers } from './userHandlers';

const spamBot = Promise.resolve(getUser({ userName: 'Spam bot' }));

const getRandomMessage = () => {
  const randomInt = getRandomInt(0, messages.length);
  return messages[randomInt];
};

const startSpamBot = (socket, spamBotId) => {
  const timerId = setTimeout(async () => {
    const newMessage = await createSpamBotMessage(
      socket.userId,
      spamBotId,
      getRandomMessage()
    );
    socket.emit('message:get', newMessage);
    startSpamBot(socket, spamBotId);
  }, getRandomInt(spamBotConfig.minInterval, spamBotConfig.maxInterval));
  socket.timerId = timerId;
};

const onConnect = async (socket) => {
  console.log('socket connected');

  const { userId } = socket.handshake.query;
  socket.userId = userId;
  socket.join(userId);

  spamBot.then((bot) => startSpamBot(socket, bot.id));

  const user = await updateUser(userId, { isOnline: true });
  socket.broadcast.emit('user:update', user);
};

const onDisconnect = (socket) => {
  socket.on('disconnect', () => {
    console.log('socket disconnected');
    clearTimeout(socket.timerId);
  });
};

export const registerSockets = (io, socket) => {
  onConnect(socket);
  onDisconnect(socket);
  chatHandlers(io, socket);
  messageHandlers(io, socket);
  userHandlers(io, socket);
};
