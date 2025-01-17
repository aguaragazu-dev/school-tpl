"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import DataTablePagination from "./data-table-pagination"
import { DataTableViewOptions } from "./data-table-view-options"
import SearchBar from "./search-bar"
import DateFilters from "./date-filters"
import DateRangeFilter from "./date-range-filter"
import DataSummary from "./data-summary"
import { StatsCards } from "./stats-cards"
import { TableStats, TableAction, FilterOption } from "../../types/data-table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DataTableToolbar } from "./data-table-toolbar"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  actions?: TableAction[]
  stats?: TableStats[]
  summaryData?: {
    title: string
    description: string
    totalName: string
    getTotal: (item: any) => number
  }
  enableDateRangeFilter?: boolean
  enableDateFilters?: boolean
  dateField?: string
  filterOptions?: FilterOption[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  actions,
  stats,
  summaryData,
  enableDateRangeFilter = false,
  enableDateFilters = false,
  dateField = 'date',
  filterOptions,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [searchResults, setSearchResults] = React.useState(data)
  const [filteredData, setFilteredData] = React.useState(data)
  const [isSearch, setIsSearch] = React.useState(true)

  const table = useReactTable({
    data: isSearch ? searchResults : filteredData,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      {stats && <StatsCards stats={stats} className="mb-6" />}
      {summaryData && (
        <DataSummary
          title={summaryData.title}
          description={summaryData.description}
          data={isSearch ? searchResults : filteredData}
          totalName={summaryData.totalName}
          getTotal={summaryData.getTotal}
        />
      )}
      <DataTableToolbar table={table}>
        <div className="flex items-center gap-2">
          <SearchBar
            data={data}
            onSearch={setSearchResults}
            setIsSearch={setIsSearch}
          />
          {enableDateRangeFilter && (
            <DateRangeFilter
              data={data}
              onFilter={setFilteredData}
              setIsSearch={setIsSearch}
              dateField={dateField}
            />
          )}
          {enableDateFilters && (
            <DateFilters
              data={data}
              onFilter={setFilteredData}
              setIsSearch={setIsSearch}
              dateField={dateField}
            />
          )}
          {filterOptions && filterOptions.length > 0 && (
            <Select
              onValueChange={(value) => {
                if (value === "all") {
                  setFilteredData(data);
                  setIsSearch(true);
                } else {
                  const selectedOption = filterOptions.find(option => option.value === value);
                  if (selectedOption) {
                    const filtered = data.filter(item => item[selectedOption.field] === selectedOption.value);
                    setFilteredData(filtered);
                    setIsSearch(false);
                  }
                }
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                {filterOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          <DataTableViewOptions table={table} />
        </div>
      </DataTableToolbar>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
      <DataTablePagination table={table} />
    </div>
  )
}

