"use client";

import { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ListProps } from "@/types/list-props";
import { GListListProps } from "@/types/glist-save-props";
import { GListDialog } from "./glist-dialog";
import { useRouter } from "next/navigation";

export default function GList({
  list,
  onSave,
  onDuplicateList,
  onArchiveList,
}: GListListProps) {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<ListProps | null>(null);

  const handleSave = async (updatedList: ListProps) => {
    try {
      await onSave(updatedList);
      router.refresh();
      setSelectedRow(null);
    } catch (error) {
      console.error("Error saving list:", error);
    }
  }

  const handDuplicateList = async (id: number) => {
    try {
      await onDuplicateList (id);
      router.refresh();
    } catch (error) {
      console.error("Error on duplicating list:", error);
    }
  }

  const handArchiveList = async (id: number) => {
    try {
      await onArchiveList(id);
      router.refresh();
    } catch (error) {
      console.error("Error on archiving list:", error);
    }
  }

  const handleAction = (action: string, item: ListProps) => {
    switch (action) {
      case "duplicate":
        handDuplicateList(item.id);
        break;
      case "edit":
        setSelectedRow(item);
        break;
      case "archive":
        handArchiveList(item.id);
        break;
      default:
        console.warn("Unknown action:", action);  
    }
    router.refresh();
  };

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={list}
        onAction={handleAction}
      />
      {selectedRow && (
        <GListDialog
          list={selectedRow}
          onSave={handleSave}
          onClose={() => setSelectedRow(null)}
        />
      )}
    </div>
  );
}
