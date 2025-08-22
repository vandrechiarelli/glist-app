"use server";

import { saveItem } from "@/lib/item";
import { ItemProps } from "@/types/item-props";
import { revalidatePath } from "next/cache";

export async function onSaveServer(updatedItem: ItemProps) {
    // Use a client-side handler that calls a server action to save the item
    // In your client component, pass a wrapper function that calls the server action
    try {
        await saveItem(updatedItem);
        revalidatePath("/app/gitem");
    } catch (error) {
        console.error("Error in onSaveServer Item:", error);
        throw error;
    }
}