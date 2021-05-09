import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Chat } from './containers/Chat';
import { ChatSidebar } from './containers/ChatSidebar';
import { MobileChatSidebar } from './containers/MobileChatSidebar';
import styles from './styles.module.sass';

export const ChatScene = () => {
  return (
    <div className={styles.chatScene}>
      <Container className={styles.container} fluid="md">
        <Row noGutters className={styles.row}>
          <Col md={9} sm={8} className={styles.chat}>
            <Chat />
          </Col>
          <Col md={3} sm={4} xs={10} className={styles.sidebar}>
            <ChatSidebar />
          </Col>
          <MobileChatSidebar />
        </Row>
      </Container>
    </div>
  );
};
