import { ColumnDef } from "@tanstack/react-table";
export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  height?: number;
  pagination?: {
    pageIndex: number;
    pageSize: number;
  };
  countOptions?: number[];
}
