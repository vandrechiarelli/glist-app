import { ListProps } from "./list-props";

export interface ActionListProps {
    onSave: (item: ListProps) => Promise<void>;
    onDuplicateList: (id: number) => Promise<void>;
    onArchiveList: (id: number) => Promise<void>;
}