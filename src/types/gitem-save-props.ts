import { ItemProps } from "./item-props";

export interface SaveItemProps {
    onSave: (item: ItemProps) => Promise<void>;
}