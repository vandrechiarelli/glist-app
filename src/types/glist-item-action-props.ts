import { ListItemSaveProps } from "./list-item-save-props";

export interface ActionListItemProps {
    onSave: (item: ListItemSaveProps) => Promise<void>;
    onDuplicateList: (id: number) => Promise<void>;
    onArchiveList: (id: number) => Promise<void>;
}