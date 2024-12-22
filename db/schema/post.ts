import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";
import { userTable } from "./user";
import { assetTable } from "./asset";

export const postTable = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content"),
  asset_id: uuid("asset_id").references(() => assetTable.id),
  user_id: uuid("user_id").references(() => userTable.id),
});

export type Post = InferInsertModel<typeof postTable>;
