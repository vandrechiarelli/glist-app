import { ItemProps } from "./item-props";
import { UnitProps } from "./unit-props";
import { SaveItemProps } from "./gitem-save-props";

export interface GItemListProps extends SaveItemProps {
  items: ItemProps[];
  units: UnitProps[];
}