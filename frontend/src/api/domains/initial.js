import { api } from 'api/api';

export const initialRequest = (userName) => {
  return api.post('/api/initial', { userName });
};
