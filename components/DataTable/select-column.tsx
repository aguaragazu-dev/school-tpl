'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import type { SelectColumnProps } from "@/types/data-table"

export function SelectColumn({
  value,
  options,
  onChange,
  immediate = true,
  onConfirm
}: SelectColumnProps) {
  const [isPending, setIsPending] = useState(false)

  const handleChange = async (newValue: string) => {
    if (isPending) return

    if (immediate) {
      onChange(newValue)
      return
    }

    if (onConfirm) {
      try {
        setIsPending(true)
        await onConfirm(newValue)
        onChange(newValue)
      } catch (error) {
        console.error('Error al confirmar el cambio:', error)
      } finally {
        setIsPending(false)
      }
    }
  }

  return (
    <Select value={value.toString()} onValueChange={handleChange} disabled={isPending}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem 
            key={option.value} 
            value={option.value.toString()}
            className={option.color}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

