import { SocketContext } from 'containers/SocketProvider';
import React, { useContext, useRef, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Message } from '../../components/Message';
import styles from './styles.module.sass';

export const ChatBody = () => {
  const [messageContent, setMessageContent] = useState('');
  const socket = useContext(SocketContext);
  const messageListRef = useRef(null);
  const isDisabled = !messageContent.trim();
  // @ts-ignore
  const chatId = useSelector(({ chat }) => chat.activeId);
  // @ts-ignore
  const chatMessagesIds = useSelector(({ chat }) => {
    if (chatId) {
      return chat.entities[chatId].messages;
    }
    return [];
  });
  // @ts-ignore
  const messagesByIds = useSelector(({ message }) => message.entities);
  // @ts-ignore
  const usersByIds = useSelector(({ user }) => user.entities);
  // @ts-ignore
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const onChange = (event) => {
    setMessageContent(event.target.value);
  };

  const onSendMessage = () => {
    if (messageContent.trim()) {
      socket.emit('message:send', messageContent, chatId);
      setMessageContent('');
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && !isDisabled) {
      onSendMessage();
    }
  };

  const messageList = chatMessagesIds.map((id) => {
    const message = messagesByIds[id];
    const isOwn = message.userId === currentUser.id;
    return message ? (
      <Message
        key={id}
        author={isOwn ? currentUser.userName : usersByIds[message.userId]?.userName}
        content={message.content}
        createdAt={message.createdAt}
        readAt={message.readAt}
        isOwn={isOwn}
      />
    ) : null;
  });

  return (
    <div className={styles.container}>
      <div className={styles.chatBody}>
        <div className={styles.messageListWrapper}>
          <div className={styles.messageList} ref={messageListRef}>
            {messageList}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.typingIndicator}></div>
          <FormControl
            placeholder="Start chatting!"
            className={styles.input}
            onChange={onChange}
            value={messageContent}
            onKeyDown={onKeyDown}
          />
          <Button
            onClick={onSendMessage}
            variant="primary"
            className={styles.sendBtn}
            disabled={isDisabled}
          >
            Send message
          </Button>
        </div>
      </div>
    </div>
  );
};
