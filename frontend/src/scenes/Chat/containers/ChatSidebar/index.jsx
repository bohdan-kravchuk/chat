import React from 'react';
import { FormControl } from 'react-bootstrap';
import { ChatItem } from 'scenes/Chat/components/ChatItem';
import { ChatSidebarTabs } from 'scenes/Chat/components/ChatSidebarTabs';
import styles from './styles.module.sass';

const chatList = [
  {
    id: '1',
    avatarURI: 'https://i.imgur.com/klXF37f.jpeg',
    userName: 'Cat Meow',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, enim.',
    isOnline: true,
  },
  {
    id: '1',
    avatarURI: 'https://i.imgur.com/klXF37f.jpeg',
    userName: 'Cat Meow',
    info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, enim.',
    isOnline: true,
  },
];

export const ChatSidebar = () => {
  return (
    <div className={styles.chatSidebar}>
      <ChatSidebarTabs onSelect={() => {}} />
      <div className={styles.tabContent}>
        <div className={styles.chatList}>
          {chatList.map(({ id, avatarURI, userName, isOnline, info }) => (
            <ChatItem
              key={id}
              avatarURI={avatarURI}
              userName={userName}
              isOnline={isOnline}
              info={info}
              isActive={false}
            />
          ))}
        </div>
        <div className={styles.searchWrapper}>
          <FormControl placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};
