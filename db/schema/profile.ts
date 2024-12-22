import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";
import { userTable } from "./user";

export const profileTable = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  last_name: varchar("last_name", { length: 50 }).notNull(),
  first_name: varchar("first_name", { length: 50 }).notNull(),
  username: varchar("username", { length: 50 }).unique().notNull(),
  image: text("image"),
  cover: text("cover"),
  user_id: uuid("user_id").references(() => userTable.id),
});

export type Profile = InferInsertModel<typeof profileTable>;
