import React from 'react';
import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ChatItem } from 'scenes/Chat/components/ChatItem';
import { ChatSidebarTabs } from 'scenes/Chat/components/ChatSidebarTabs';
import { selectChat } from 'state/chatSlice';
import styles from './styles.module.sass';

export const ChatSidebar = () => {
  // @ts-ignore
  const chatsByIds = useSelector(({ chat }) => chat.entities);
  // @ts-ignore
  const activeChatId = useSelector(({ chat }) => chat.activeId);
  // @ts-ignore
  const usersByIds = useSelector(({ user }) => user.entities);
  // @ts-ignore
  const currentUser = useSelector(({ auth }) => auth.currentUser);

  const dispatch = useDispatch();

  const onChatSelect = (id) => {
    dispatch(selectChat({ id }));
  };

  const chatList = Object.values(chatsByIds).map(({ id, users }) => {
    const [firstUserId, secondUserId] = users;
    const companionId = firstUserId === currentUser.id ? secondUserId : firstUserId;
    const { avatarURI, userName, isOnline, info } = usersByIds[companionId];
    return (
      <ChatItem
        key={id}
        id={id}
        avatarURI={avatarURI}
        userName={userName}
        isOnline={isOnline}
        info={info}
        isActive={id === activeChatId}
        onClick={onChatSelect}
      />
    );
  });

  return (
    <div className={styles.chatSidebar}>
      <ChatSidebarTabs onSelect={() => {}} />
      <div className={styles.tabContent}>
        <div className={styles.chatList}>{chatList}</div>
        <div className={styles.searchWrapper}>
          <FormControl placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};
