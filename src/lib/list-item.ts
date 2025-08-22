import { fetchData, saveData } from "./api";
import { ListNameProps } from "@/types/list-name-props";
import { ListItemProps } from "@/types/glist-item-props";
import { ListItemSaveProps } from "@/types/list-item-save-props";

export async function fetchListNameById(id: number) {
    return fetchData<ListNameProps>(`/list_name/${id}`);
}

export async function fetchListItemById(id: number) {
    return fetchData<ListItemProps[]>(`/list_item/${id}`);
}

export async function fetchAvailableItemsListItemById(id: number) {
    return fetchData<ListItemProps[]>(`/list_item/${id}/available`);
}


export async function saveListItem(list: ListItemSaveProps): Promise<void> {
    return saveData<void>("/list_item", "POST", list);
}