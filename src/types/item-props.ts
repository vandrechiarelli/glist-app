import { ActionListItemProps } from "./glist-item-action-props";

export interface ItemProps extends ActionListItemProps {
    id: number;
    name: string;
    translatedName: string;
    defaultQuantity: number;
    durationDays: number;
    unitId: number;
    unitName: string;
    aisleName: string;
    isUrgent: number;
}