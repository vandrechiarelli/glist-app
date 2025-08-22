"use server";

import { saveListItem } from "@/lib/list-item";
import { ListItemSaveProps } from "@/types/list-item-save-props";
import { revalidatePath } from "next/cache";

export async function onSaveServer(updatedListItem: ListItemSaveProps) {
    try {
        await saveListItem(updatedListItem);
        revalidatePath("/app/glistItem");
    } catch (error) {
        console.error("Error in onSaveServer:", error);
        throw error;
    }
}