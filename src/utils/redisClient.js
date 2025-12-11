import { createClient } from 'redis';
import logger from '../config/logger.js';

const client = createClient({ url: process.env.REDIS_URL });
client.connect().catch(err => logger.error(err));

export default client;
