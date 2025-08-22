"use server";

import { saveList, duplicateList, archiveList } from "@/lib/list";
import { ListProps } from "@/types/list-props";
import { revalidatePath } from "next/cache";

export async function onSaveServer(updatedList: ListProps) {
    // Use a client-side handler that calls a server action to save the item
    // In your client component, pass a wrapper function that calls the server action
    try {
        await saveList(updatedList);
        revalidatePath("/app/glist");
    } catch (error) {
        console.error("Error in onSaveServer:", error);
        throw error;
    }
}

export async function onDuplicateListServer(id: number) {
    try {
        await duplicateList(id);
        revalidatePath("/app/glist");
    } catch (error) {
        console.error("Error in onDuplicateListServer:", error);
        throw error;
    }
}

export async function onArchiveListServer(id: number) {
    try {
        await archiveList(id);
        revalidatePath("/app/glist");
    } catch (error) {
        console.error("Error in onArchiveList:", error);
        throw error;
    }
}