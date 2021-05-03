import React from 'react';
import styles from './styles.module.sass';

export const ChatItem = ({
  id,
  avatarURI,
  userName,
  info,
  isOnline,
  isActive,
  onClick,
}) => {
  const chatItemClasses = [styles.chatItem, isActive ? styles.active : ''].join(' ');
  const avatarClasses = [styles.avatar, isOnline ? styles.online : ''].join(' ');
  return (
    <div className={chatItemClasses} onClick={() => onClick(id)}>
      <div className={avatarClasses}>
        <img src={avatarURI} alt="avatar" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{userName}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </div>
  );
};
