import store from '../store';
import { getMessage } from 'state/messageSlice';

export const messageHandlers = (socket) => {
  socket.on('message:get', (message) => {
    store.dispatch(getMessage(message));
  });
};
