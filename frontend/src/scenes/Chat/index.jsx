import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Chat } from './containers/Chat';
import { ChatSidebar } from './containers/ChatSidebar';
import styles from './styles.module.sass';

export const ChatScene = () => {
  return (
    <div className={styles.chatScene}>
      <Container className={styles.container}>
        <Row noGutters className={styles.row}>
          <Col md={9}>
            <Chat />
          </Col>
          <Col md={3}>
            <ChatSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
