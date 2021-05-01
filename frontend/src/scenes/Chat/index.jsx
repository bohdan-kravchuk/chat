import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Chat } from './containers/Chat';
import { ChatSidebar } from './containers/ChatSidebar';
import styles from './styles.module.sass';

export const ChatScene = () => {
  return (
    <div className={styles.chatScene}>
      <Container className={styles.container}>
        <Col md={9}>
          <Chat />
        </Col>
        <Col md={3}>
          <ChatSidebar />
        </Col>
      </Container>
    </div>
  );
};
