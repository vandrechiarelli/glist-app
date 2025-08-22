import { ListProps } from "./list-props";
import { ActionListProps } from "./glist-action-props";

export interface GListListProps extends ActionListProps {
  list: ListProps[];
}