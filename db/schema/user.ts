import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import type { InferInsertModel } from "drizzle-orm";

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  password: varchar("password").notNull(),

  last_name: varchar("last_name", { length: 50 }).notNull(),
  first_name: varchar("first_name", { length: 50 }).notNull(),
  username: varchar("username", { length: 50 }).unique().notNull(),
  image: text("image"),
  cover: text("cover"),
});

export type User = InferInsertModel<typeof userTable>;
