import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";
import { userTable } from "./user";
import { postTable } from "./post";

export const commentTable = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content").notNull(),
  image: text("image"),
  user_id: uuid("user_id").references(() => userTable.id),
  post_id: uuid("post_id").references(() => postTable.id),
});

export type Comment = InferInsertModel<typeof commentTable>;
