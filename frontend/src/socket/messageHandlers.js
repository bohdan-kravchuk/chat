import { socket } from './index';
import store from '../store';

export const messageHandlers = () => {
  socket.on('message:new', (message) => {
    // store.dispatch();
  });
};
