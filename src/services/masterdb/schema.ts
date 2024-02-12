import { boolean, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  done: boolean('done').notNull(),
});
