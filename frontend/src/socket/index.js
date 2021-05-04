import { env } from 'env';
import { io } from 'socket.io-client';
import { messageHandlers } from './messageHandlers';

export const socket = io(env.apiUrl);

export const connectSocketHandlers = () => {
  messageHandlers();
};
