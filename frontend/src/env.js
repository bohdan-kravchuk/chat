import { getOsEnv } from 'helpers/path';

export const env = {
  apiUrl: getOsEnv('REACT_APP_API_URL'),
};
