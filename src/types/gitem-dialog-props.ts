import { ItemProps } from "./item-props";
import { UnitProps } from "./unit-props";
import { SaveItemProps } from "./gitem-save-props";

export interface GItemDialogProps extends SaveItemProps {
  item: ItemProps;
  units: UnitProps[];
  onClose: () => void;
}