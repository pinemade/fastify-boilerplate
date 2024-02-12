CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"done" boolean NOT NULL
);
