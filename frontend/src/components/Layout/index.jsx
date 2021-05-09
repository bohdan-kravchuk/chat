import { Navbar } from 'containers/Navbar';
import React from 'react';
import styles from './styles.module.sass';

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>{children}</div>
    </div>
  );
};
