import { pgTable, uuid } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";
import { userTable } from "./user";
import { postTable } from "./post";

export const likeTable = pgTable("likes", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: uuid("user_id").references(() => userTable.id),
  post_id: uuid("post_id").references(() => postTable.id),
});

export type Like = InferInsertModel<typeof likeTable>;
