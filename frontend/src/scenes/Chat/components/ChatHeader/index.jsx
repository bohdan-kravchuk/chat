import React from 'react';
import styles from './styles.module.sass';

export const ChatHeader = ({ name, description, avatarURI }) => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.avatarWrapper}>
        <img src={avatarURI} alt="avatar" className={styles.avatar} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
