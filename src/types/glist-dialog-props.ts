import { ListProps } from "./list-props";
import { ActionListProps } from "./glist-action-props";

export interface GListDialogProps extends ActionListProps {
  list: ListProps;
  onClose: () => void;
}