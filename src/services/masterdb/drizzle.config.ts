import type { Config } from 'drizzle-kit';

export default {
  schema: './src/services/masterdb/schema.ts',
  out: './src/services/masterdb/drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME as string,
  },
} satisfies Config;
