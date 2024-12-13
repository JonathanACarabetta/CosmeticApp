import { int, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const itemsTable = sqliteTable("items_table",{
    id: int().primaryKey({autoIncrement:true}),
    name: text().notNull(),
    description: text(),
    cost: int(),
    price: int().notNull()
})