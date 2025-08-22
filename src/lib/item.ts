import { fetchData, saveData } from "./api";
import { ItemProps } from "@/types/item-props";
import { UnitProps } from "@/types/unit-props";

export async function fetchItems() {
    return fetchData<ItemProps[]>("/items");
}

export async function fetchItemById(id: number) {
    return fetchData<ItemProps>(`/items/${id}`);
}

export async function fetchUnits() {
    return fetchData<UnitProps[]>("/units");
}

export async function saveItem(item: ItemProps) {
    const method = item.id ? "PUT" : "POST";
    const endpoint = item.id
        ? `/item/${item.id}`
        : `/item`;

    return saveData<ItemProps>(endpoint, method, item);
}