import store from '../store';
import { getMessage } from 'state/messageSlice';
import { hideTypingIndicator, showTypingIndicator } from 'state/uiSlice';

export const messageHandlers = (socket) => {
  socket.on('message:get', (message) => {
    const { ui } = store.getState();
    if (ui.typingIndicator.chatId === message.chatId) {
      store.dispatch(hideTypingIndicator());
    }
    store.dispatch(getMessage(message));
  });
  socket.on('message:typing', (chatId) => {
    const { chat } = store.getState();
    if (chat.activeId !== chatId) return;
    store.dispatch(showTypingIndicator(chatId));
  });
};
