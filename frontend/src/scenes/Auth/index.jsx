import React, { useState } from 'react';
import { Button, Container, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { initial } from 'state/asyncActions';
import styles from './styles.module.sass';

export const AuthScene = () => {
  const [userName, setUserName] = useState('');
  const isDisabled = !userName.trim();
  const dispatch = useDispatch();

  const onChange = (event) => {
    setUserName(event.target.value);
  };

  const onSubmit = async () => {
    // @ts-ignore
    dispatch(initial(userName));
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && !isDisabled) {
      onSubmit();
    }
  };

  return (
    <Container className={styles.container}>
      <p>Please enter your username to proceed:</p>
      <div className={styles.authForm}>
        <FormControl
          placeholder="Enter your username..."
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={styles.usernameInput}
        />
        <Button type="button" disabled={isDisabled} onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </Container>
  );
};
