import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.sass';

export const ErrorWrapper = ({ message, children }) => {
  return message ? (
    <Container className={styles.container}>{message}</Container>
  ) : (
    children
  );
};
