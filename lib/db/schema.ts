import { pgTable, text, uuid, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const files = pgTable("files", {
    id: uuid("id").unique().defaultRandom().primaryKey(),

    // Basic File/Folder Information
    name: text("name").notNull(),
    path: text("path").notNull(),
    size: integer("size").notNull(),
    type: text("type").notNull(), // "Default Folder"

    // Storge Information
    fileUrl: text("file_url"),
    thumbnailUrl: text("thumbnail_url"),

    // Ownership
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"),

    // FIle/Folder flags
    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrash: boolean("is_trashed").default(false).notNull(),

    // Timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

/*
parent: Each file/folder can have one parent folder

children: Each folder can have many child files/folder
*/

export const filesRelations = relations(files, ({ one, many }) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id]
    }),

    // Relationship to child file/folder
    children: many(files)
}));

// Type definations
export const File = typeof files.$inferSelect
export const NewFile = typeof files.$inferInsert