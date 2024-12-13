import { integer, numeric, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("items",{
    id: integer().primaryKey(),
    name: text({length:50}).notNull(),
    description: text({length:300}),
    cost: numeric(),
    price: numeric().notNull()
})