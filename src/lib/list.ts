import { fetchData, saveData } from "./api";
import { ListProps } from "@/types/list-props";

export async function fetchList() {
    return fetchData<ListProps[]>("/list_name");
}

export async function saveList(list: ListProps) {
    const method = list.id ? "PUT" : "POST";
    const endpoint = list.id
        ? `/list_name/${list.id}`
        : `/list_name`;

    return saveData<ListProps>(endpoint, method, list);
}

export async function duplicateList(id: number) {
    return saveData<ListProps>(`/list_name/${id}/duplicate`, "POST");
}

export async function archiveList(id: number) {
    return saveData<ListProps>(`/list_name/${id}/archive`, "POST");
}