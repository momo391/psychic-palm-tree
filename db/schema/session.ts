import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import type { InferInsertModel } from "drizzle-orm";
import { userTable } from "./user";

export const sessionTable = pgTable("sessions", {
  id: text("id").primaryKey(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => userTable.id),
  expires_at: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export type Session = InferInsertModel<typeof sessionTable>;
