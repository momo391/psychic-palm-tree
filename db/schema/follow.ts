import { pgTable, uuid } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";
import { userTable } from "./user";

export const followTable = pgTable("follows", {
  id: uuid("id").primaryKey().defaultRandom(),
  follower: uuid("follower").references(() => userTable.id),
  followed: uuid("followed").references(() => userTable.id),
});

export type Follow = InferInsertModel<typeof followTable>;
