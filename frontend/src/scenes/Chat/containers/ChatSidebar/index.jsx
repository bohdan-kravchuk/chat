import { useDebounce } from 'hooks/useDebouce';
import React, { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ChatItem } from 'scenes/Chat/components/ChatItem';
import { ChatSidebarTabs } from 'scenes/Chat/components/ChatSidebarTabs';
import { selectChat } from 'state/chatSlice';
import styles from './styles.module.sass';

const delay = 500;

export const ChatSidebar = () => {
  const [searchText, setSearchText] = useState('');
  // @ts-ignore
  const chatsByIds = useSelector(({ chat }) => chat.entities);
  // @ts-ignore
  const activeChatId = useSelector(({ chat }) => chat.activeId);
  // @ts-ignore
  const usersByIds = useSelector(({ user }) => user.entities);
  // @ts-ignore
  const currentUser = useSelector(({ auth }) => auth.currentUser);
  const dispatch = useDispatch();
  const debouncedSearchText = useDebounce(searchText, delay);
  const chats = useMemo(() => Object.values(chatsByIds), [chatsByIds]);
  const [filteredChats, setFilteredChats] = useState(chats);
  const [activeTabKey, setActiveTabKey] = useState('online');

  const filterChatsByName = useCallback(
    (name) => {
      const result = name
        ? chats.filter((item) => {
            const [firstUserId, secondUserId] = item.users;
            const companionId =
              firstUserId === currentUser.id ? secondUserId : firstUserId;
            const companion = usersByIds[companionId];
            return companion.userName.toLowerCase().includes(name);
          })
        : chats;
      setFilteredChats(result);
    },
    [usersByIds, currentUser.id, chats]
  );

  useEffect(() => {
    filterChatsByName(debouncedSearchText.trim().toLowerCase());
  }, [debouncedSearchText, filterChatsByName]);

  const onChatSelect = (id) => {
    dispatch(selectChat({ id }));
  };

  const onChange = (event) => {
    setSearchText(event.target.value);
  };

  const onTabSelect = (key) => {
    setActiveTabKey(key);
  };

  const chatList = filteredChats.map(({ id, users }) => {
    const [firstUserId, secondUserId] = users;
    const companionId = firstUserId === currentUser.id ? secondUserId : firstUserId;
    const { avatarURI, userName, isOnline, info } = usersByIds[companionId];
    return activeTabKey !== 'online' || isOnline ? (
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
    ) : null;
  });

  return (
    <div className={styles.chatSidebar}>
      <ChatSidebarTabs onSelect={onTabSelect} activeKey={activeTabKey} />
      <div className={styles.tabContent}>
        <div className={styles.chatList}>{chatList}</div>
        <div className={styles.searchWrapper}>
          <FormControl placeholder="Search..." value={searchText} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};
