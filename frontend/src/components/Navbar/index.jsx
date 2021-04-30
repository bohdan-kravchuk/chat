import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.sass';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.siteName}>Chat bots 2.0</div>
      </Container>
    </div>
  );
};
