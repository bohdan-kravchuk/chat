import { env } from 'env';
import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { connectSocketHandlers } from 'socket';
import { io } from 'socket.io-client';

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  // @ts-ignore
  const user = useSelector(({ auth }) => auth.currentUser);

  useEffect(() => {
    if (user && !socket) {
      const socket = io(env.apiUrl, { query: { userId: user.id } });
      setSocket(socket);
    }
  }, [user, socket]);

  useEffect(() => {
    if (socket) {
      connectSocketHandlers(socket);
      return () => {
        socket.disconnect();
      };
    }
  }, [socket]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
