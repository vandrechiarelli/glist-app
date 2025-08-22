"use client";

import Item from "./glist-item-list-item";
import { GListItemProps } from "@/types/glist-item-props";

export default function GListItemsList({
  listItem,
  onSaveQuantity,
  onArchive,
}: GListItemProps) {
  return (
    <>
      {listItem.map((item) => (
        <div key={item.id} className="border-2 inline-block">
          <Item
            {...item}
            onSaveQuantity={onSaveQuantity}
            onArchive={onArchive}
        />
        </div>
      ))}
    </>
  )
}