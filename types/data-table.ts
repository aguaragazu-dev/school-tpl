import { ReactNode } from 'react'

export interface TableStats {
  title: string
  value: string | number
  description?: string
  icon?: ReactNode
  color?: string
}

export interface TableAction {
  type: 'edit' | 'delete' | 'view'
  onClick: (row: any) => void
  show: boolean
}

export interface SelectOption {
  label: string
  value: string | number
  color?: string
}

export interface SwitchColumnProps {
  value: boolean
  onChange: (value: boolean) => void
  activeColor?: string
  inactiveColor?: string
  loading?: boolean
  immediate?: boolean
  onConfirm?: (value: boolean) => Promise<void>
}

export interface SelectColumnProps {
  value: string | number
  options: SelectOption[]
  onChange: (value: string | number) => void
  immediate?: boolean
  onConfirm?: (value: string | number) => Promise<void>
}

export interface DateRangeFilterProps {
  data: any[]
  onFilter: (filteredData: any[]) => void
  setIsSearch: (isSearch: boolean) => void
  className?: string
  dateField: string
}

export interface SearchBarProps {
  data: any[]
  onSearch: (results: any[]) => void
  setIsSearch: (isSearch: boolean) => void
}

export interface FilterOption {
  label: string
  value: string | number
  field: string
}

