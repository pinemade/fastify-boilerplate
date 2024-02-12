import { masterdb } from '@src/configs/masterdb';
import { drizzle } from 'drizzle-orm/postgres-js';
import pg from 'postgres';
import * as schema from './schema';

export const connection = pg({
  ...masterdb,
});

export const db = drizzle(connection, { schema });
