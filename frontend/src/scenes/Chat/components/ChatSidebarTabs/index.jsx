import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styles from './styles.module.sass';

const chatSidebarTabs = {
  online: { key: 'online', title: 'Online' },
  all: { key: 'all', title: 'All' },
};

export const ChatSidebarTabs = ({ activeKey, onSelect }) => {
  return (
    <Tabs activeKey={activeKey} onSelect={onSelect}>
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
