import React from 'react';
import { ChatBody } from 'scenes/Chat/components/ChatBody';
import { ChatHeader } from 'scenes/Chat/components/ChatHeader';
import styles from './styles.module.sass';

export const Chat = () => {
  return (
    <div className={styles.chat}>
      <ChatHeader />
      <ChatBody />
    </div>
  );
};
