import { ActionListItemProps } from "./glist-item-action-props";
import { ItemProps } from "./item-props";

export interface GListItemProps extends ActionListItemProps {
    listItem?: ItemProps[];
    listAvailableItems?: ItemProps[];
}