import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebarMenu } from 'state/uiSlice';
import { ChatSidebar } from '../ChatSidebar';
import styles from './styles.module.sass';

export const MobileChatSidebar = () => {
  // @ts-ignore
  const showMenu = useSelector(({ ui }) => ui.showSidebarMenu);
  const dispatch = useDispatch();
  const containerRef = useRef();

  const onMenuToggle = (event) => {
    if (event.target === containerRef.current) {
      dispatch(toggleSidebarMenu());
    }
  };

  return (
    <div
      className={[styles.container, showMenu ? styles.show : ''].join(' ')}
      ref={containerRef}
      onClick={onMenuToggle}
    >
      <div className={styles.sidebar}>
        <ChatSidebar onChatClick={() => dispatch(toggleSidebarMenu())} />
      </div>
    </div>
  );
};
