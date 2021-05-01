import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styles from './styles.module.sass';

const chatSidebarTabs = {
  online: { key: 'online', title: 'Online' },
  all: { key: 'all', title: 'All' },
};

export const ChatSidebarTabs = ({ onSelect }) => {
  const [activeKey, setActiveKey] = useState('online');

  const onTabSelect = (key) => {
    setActiveKey(key);
    onSelect(key);
  };

  return (
    <Tabs activeKey={activeKey} onSelect={onTabSelect}>
      {Object.values(chatSidebarTabs).map(({ key, title }) => (
        <Tab
          key={key}
          eventKey={key}
          title={title}
          tabClassName={[styles.tab, key === activeKey ? styles.active : ''].join(' ')}
        />
      ))}
    </Tabs>
  );
};
