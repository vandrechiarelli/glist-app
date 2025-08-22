declare module "@tanstack/react-table" {
  interface TableMeta<TData> {
    onAction?: (action: string, row: TData) => void;
  }
}
