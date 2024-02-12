import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { connection, db } from './db';

(async function () {
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, {
    migrationsFolder: './src/services/masterdb/drizzle',
  });

  // Don't forget to close the connection, otherwise the script will hang
  await connection.end();
})();
