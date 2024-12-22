import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { InferInsertModel } from "drizzle-orm";

export const assetTable = pgTable("assets", {
  id: uuid("id").primaryKey().defaultRandom(),
  url: text("url"),
  height: integer("height"),
  width: integer("width"),
  type: varchar("type", { length: 32 }),
});

export type Asset = InferInsertModel<typeof assetTable>;
