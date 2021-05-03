import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './styles.module.sass';

export const LoadingWrapper = ({ loading, height = '100%', children }) => {
  return loading ? (
    <div className={styles.container} style={{ height: `${height}` }}>
      <Spinner animation="border" role="status" />
    </div>
  ) : (
    children
  );
};
