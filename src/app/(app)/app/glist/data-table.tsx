"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pickaxe, UserCheck } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onAction?: (action: string, row: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onAction,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      onAction,
    },
  });

  const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement> & { wrapperClassName?: string }
  >(({ className, wrapperClassName, ...props }, ref) => (
    <div className={cn("relative w-full overflow-auto", wrapperClassName)}>
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  ));
  Table.displayName = "Table";

  return (
    <div>
      <Table wrapperClassName="overflow-clip">
        <TableHeader className="sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => router.push("/app/glistItem?id=" + row.original.id)}
                className={onAction ? "cursor-pointer hover:bg-muted" : ""}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {
                    cell.column.getIndex() !== 3 ? (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    ) : (
                      <>
                        {cell.getValue() as number === 1 ? (
                          <Pickaxe color="#febc2e" size={20} />
                        ) : (
                          <UserCheck color="#3baa36" size={20} />
                        )}
                      </>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
