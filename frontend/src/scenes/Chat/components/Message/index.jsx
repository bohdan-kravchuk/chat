import { toLocaleTime } from 'helpers/date';
import React from 'react';
import styles from './styles.module.sass';

export const Message = ({ author, content, createdAt, readAt, isOwn }) => {
  const createdTime = toLocaleTime(createdAt).toUpperCase();
  const seenTime = readAt && toLocaleTime(readAt);
  const messageClasses = [styles.message, isOwn ? styles.isOwn : ''].join(' ');

  return (
    <div className={messageClasses}>
      <div className={styles.header}>
        <div className={styles.author}>{author}</div>
        <div className={styles.createdTime}>{createdTime}</div>
      </div>
      <div className={styles.content}>{content}</div>
      {isOwn && readAt && <div className={styles.seenTime}>Seen {seenTime}</div>}
    </div>
  );
};
