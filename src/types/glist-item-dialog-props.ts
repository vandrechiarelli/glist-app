import { ItemProps } from "@/types/item-props";

export interface GListItemDialogProps {
  open: boolean;
  onClose: () => void;
  items: ItemProps[];
  onAddItems: (selected: ItemProps[]) => void;
}