"use client";

import ItemsList from "@/app/(app)/app/glistItem/glist-item-list";
import NavMenu from "@/components/nav-menu";
import GListItemDialogProps from "@/app/(app)/app/glistItem/glist-item-dialog";
import { GListItemProps } from "@/types/glist-item-props";
import {SquareCheckBig, RotateCcw } from "lucide-react";
import { useState } from "react";
import { ItemProps } from "@/types/item-props";

export default function GListForm({
  listItem,
  listAvailableItems,
}: GListItemProps) {
  const menuItems = [
    {
      label: "Add",
      icon: SquareCheckBig,
      color: "#57f371",
      onClick: () => setIsDialogOpen(true),
    },
    { href: "/app/glistItems", label: "Undo", icon: RotateCcw, color: "#323ff5" },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSaveQuantity = async (id: number, qty: number) => {
    console.log("Saving quantity:", id, qty);
    // TODO: call your API to update the quantity
    // await saveListItemQuantity(id, qty);
  };

  const handleArchive = async (id: number) => {
    console.log("Archiving item:", id);
    // TODO: call your API to archive
    // await archiveListItem(id);
  };

  const handleAddItems = (selected: ItemProps[]) => {
    console.log("Adding items to list:", selected);
    // TODO: call API to add items to list
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-end flex-1 p-1">
        <NavMenu items={menuItems} />
      </div>
      <ItemsList
        listItem={listItem}
        onSaveQuantity={handleSaveQuantity}
        onArchive={handleArchive}
      />
      <GListItemDialogProps
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        items={listAvailableItems}
        onAddItems={handleAddItems}
      />
    </div>
  );
}