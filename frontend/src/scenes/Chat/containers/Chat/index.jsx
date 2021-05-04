import React from 'react';
import { useSelector } from 'react-redux';
import { ChatBody } from 'scenes/Chat/containers/ChatBody';
import { ChatHeader } from 'scenes/Chat/components/ChatHeader';
import styles from './styles.module.sass';

export const Chat = () => {
  // @ts-ignore
  const activeChat = useSelector(({ chat }) => {
    if (chat.activeId) {
      return chat.entities[chat.activeId];
    }
  });
  // @ts-ignore
  const currentUser = useSelector(({ auth }) => auth.currentUser);
  // @ts-ignore
  const companion = useSelector(({ user }) => {
    const [firstUserId, secondUserId] = activeChat?.users ?? [];
    const companionId = firstUserId === currentUser.id ? secondUserId : firstUserId;
    return user.entities[companionId];
  });

  return (
    <div className={styles.chat}>
      {activeChat && (
        <>
          <ChatHeader
            name={companion.userName}
            avatarURI={companion.avatarURI}
            description={companion.bio}
          />
          <ChatBody />
        </>
      )}
    </div>
  );
};
