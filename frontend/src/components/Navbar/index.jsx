import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import styles from './styles.module.sass';
import { useDispatch } from 'react-redux';
import { toggleSidebarMenu } from 'state/uiSlice';

export const Navbar = () => {
  const dispatch = useDispatch();

  const onMenuClick = () => dispatch(toggleSidebarMenu());

  return (
    <Container className={styles.navbar}>
      <div className={styles.siteName}>Chat bots 2.0</div>
      <Menu className={styles.icon} onClick={onMenuClick} />
    </Container>
  );
};
