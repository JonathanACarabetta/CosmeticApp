import { itemsTable } from "./index"
import { db } from "../../App";

interface Props {
    name: string;
    description?: string;
    cost?: number;
    price: number;
}

export type SelectItem = typeof itemsTable.$inferSelect[] | null | undefined;

export const instertItem = async ({ name, description, cost, price }: Props) => {
    try {
        await db.insert(itemsTable).values({ name: name, description: description, price: price, cost: cost });
    } catch (error) {
        console.log(error);
    }
}

export const selectItems = async ():Promise<SelectItem> => {
    try {
        const result: SelectItem = await db.select().from(itemsTable);
        return result;
    } catch (error) {
        console.log(error);
    }
}