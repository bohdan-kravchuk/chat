import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Message } from '../Message';
import styles from './styles.module.sass';

export const ChatBody = () => {
  const [messageContent, setMessageContent] = useState('');
  const isDisabled = !messageContent.trim();
  // @ts-ignore
  const chatMessagesIds = useSelector(({ chat }) => {
    if (chat.activeId) {
      return chat.entities[chat.activeId].messages;
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

  const onSendMessage = () => {};

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && !isDisabled) {
      onSendMessage();
    }
  };

  const messageList = chatMessagesIds.map((id) => {
    const message = messagesByIds[id];
    return message ? (
      <Message
        key={id}
        author={usersByIds[message.userId]?.userName}
        content={message.content}
        createdAt={message.createdAt}
        readAt={message.readAt}
        isOwn={message.userId === currentUser.id}
      />
    ) : null;
  });

  return (
    <div className={styles.container}>
      <div className={styles.chatBody}>
        <div className={styles.messageList}>{messageList}</div>
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
