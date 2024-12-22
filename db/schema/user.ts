import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import type { InferInsertModel } from "drizzle-orm";

export const userTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").unique().notNull(),
  password: varchar("password").notNull(),
});

export type User = InferInsertModel<typeof userTable>;
