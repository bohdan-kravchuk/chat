import store from '../store';
import { getMessage } from 'state/messageSlice';

export const messageHandlers = (socket) => {
  socket.on('message:get', (message) => {
    const state = store.getState();
    store.dispatch(getMessage(message));
  });
};
