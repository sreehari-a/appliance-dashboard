import {
  filterFns,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import {
  Cell,
  CountSelectorLabel,
  CountSelectorInput,
  CustomTable,
  CustomTableHead,
  THead,
  PaginationWrapper,
  PageButton,
  ToolPanel,
  SearchFilterWrapper,
  SearchInput,
} from "./styled";
import { TableProps } from "./types";
import filterImage from "../../assets/Filter.svg";
import leftArrow from "../../assets/LeftArrow.svg";
import rightArrow from "../../assets/RightArrow.svg";
import { GreyButton } from "../../styled";
import theme from "../../theme";
import { TableDefaults } from "./config";

export const TestIds = {
  TABLE_HEADER: "TABLE_HEADER",
  TABLE_CELL: "TABLE_CELL",
  SEARCH_INPUT: "SEARCH_INPUT",
  FILTER_BUTTON: "FILTER_BUTTON",
  COUNT_INPUT: "COUNT_INPUT",
  PAGE_NO_BUTTON: "PAGE_NO_BUTTON",
  PREVIOUS_PAGE_BUTTON: "PREVIOUS_PAGE_BUTTON",
  NEXT_PAGE_BUTTON: "NEXT_PAGE_BUTTON",
};

function Table<T>({
  columns,
  data,
  height,
  pagination: paginationProp = TableDefaults.pagination,
  countOptions = TableDefaults.countOptions
}: TableProps<T>) {
  const [pagination, setPagination] = useState<PaginationState>(paginationProp);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: data,
    columns,
    state: {
      pagination,
      globalFilter,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: filterFns.includesString,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  const getPageButtons = (currentPage: number, totalPages: number) => {
    let startIndex = currentPage - 2,
      endIndex = currentPage + 2;
    if (startIndex < 1) {
      startIndex = 1;
      endIndex = Math.min(5, totalPages);
    } else if (endIndex > totalPages) {
      endIndex = totalPages;
      startIndex = Math.max(1, endIndex - 4);
    }
    return Array.from(
      { length: endIndex - startIndex + 1 },
      (_, index) => startIndex + index
    );
  };

  const pageButtons = useMemo(
    () => getPageButtons(currentPage, totalPages),
    [currentPage, totalPages]
  );
  return (
    <CustomTable height={height}>
      <THead>
        <tr>
          <CustomTableHead
            padding={theme.padding.xl}
            borderwidth={0}
            colspan={columns.length || 1}
          >
            <ToolPanel>
              <SearchFilterWrapper>
                <SearchInput
                  type="search"
                  placeholder={"Search"}
                  value={globalFilter}
                  onChange={(e: Event) => {
                    setGlobalFilter(
                      String((e?.target as HTMLInputElement)?.value || "")
                    );
                  }}
                  data-testid={TestIds.SEARCH_INPUT}
                />
                <GreyButton data-testid={TestIds.FILTER_BUTTON}>
                  <img src={filterImage} />
                  Filter
                </GreyButton>
              </SearchFilterWrapper>
              <PaginationWrapper>
                <CountSelectorLabel color={theme.colors.textSecondary}>
                  Show
                </CountSelectorLabel>
                <CountSelectorInput
                  className="select-css"
                  value={table.getState().pagination.pageSize}
                  onChange={(e: Event) => {
                    table.setPageSize(
                      Number((e?.target as HTMLInputElement)?.value)
                    );
                  }}
                  data-testid={TestIds.COUNT_INPUT}
                >
                  {countOptions?.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </CountSelectorInput>
                <PageButton
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  key={`pagebutton-previous`}
                  data-testid={TestIds.PREVIOUS_PAGE_BUTTON}
                >
                  <img src={leftArrow} alt={"Previous"} />
                </PageButton>
                {pageButtons.map((num) => (
                  <PageButton
                    key={`pagebutton-${num}`}
                    selected={currentPage === num}
                    onClick={() => table.setPageIndex(num - 1)}
                    data-testid={`${TestIds.PAGE_NO_BUTTON}-${num}`}
                  >
                    {num}
                  </PageButton>
                ))}
                <PageButton
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  key={`pagebutton-next`}
                  data-testid={`${TestIds.NEXT_PAGE_BUTTON}`}
                >
                  <img src={rightArrow} alt={"Next"} />
                </PageButton>
              </PaginationWrapper>
            </ToolPanel>
          </CustomTableHead>
        </tr>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <CustomTableHead
                  padding={`${theme.padding.xxl} ${theme.padding.xl}`}
                  borderwidth={1}
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ width: `${header.column.getSize()}%` }}
                  data-testid={`${TestIds.TABLE_HEADER}-${header.id}`}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </CustomTableHead>
              );
            })}
          </tr>
        ))}
      </THead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <Cell
                    key={cell.id}
                    data-testid={`${TestIds.TABLE_CELL}-${cell.id}`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Cell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </CustomTable>
  );
}

export default Table;
