import * as dotenv from 'dotenv';
import { getOsEnv } from './helpers/pathHelper';

dotenv.config();

export const env = {
  port: getOsEnv('PORT'),
  clientUrl: getOsEnv('APP_CLIENT_URL'),
  mongoDbUrl: getOsEnv('MONGODB_URL'),
};
