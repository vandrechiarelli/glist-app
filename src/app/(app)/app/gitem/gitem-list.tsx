"use client";

import { useState } from "react";
import { columns } from "@/app/(app)/app/gitem/columns";
import { DataTable } from "@/app/(app)/app/gitem/data-table";
import { ItemProps } from "@/types/item-props";
import { GItemListProps } from "@/types/gitem-list-props";
import { GItemDialog } from "./gitem-dialog";
import { useRouter } from "next/navigation";

export default function GItemList({ items,  units, onSave }: GItemListProps) {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<ItemProps | null>(null);
  
  const handleSave = async (updatedItem: ItemProps) => {
    try {
      await onSave(updatedItem);
      router.refresh();
      setSelectedRow(null);
    } catch (error) {
      console.error("Error saving item:", error);
    }
  }
  
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={items}
        onRowClick={(row) => {
          setSelectedRow(row.original);
        }}
      />
      {selectedRow && (
        <GItemDialog
          units={units}
          item={selectedRow}
          onSave={handleSave}
          onClose={() => setSelectedRow(null)}
        />
      )}
    </div>
  );
}
