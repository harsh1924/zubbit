import { pgTable, text, uuid, integer, boolean } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const files = pgTable("files", {
    id: uuid("id").unique().defaultRandom().primaryKey(),

    // Basic File/Folder Information
    name: text("name").notNull(),
    path: text("path").notNull(),
    size: integer("size").notNull(),
    type: text("type").notNull(), // "Default Folder"

    // Storge Information
    fileUrl: text("file_url")
})