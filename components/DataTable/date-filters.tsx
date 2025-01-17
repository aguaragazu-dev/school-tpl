"use client"

import React, { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DateFiltersProps {
  data: any[]
  onFilter: (filteredData: any[]) => void
  setIsSearch: (isSearch: boolean) => void
  dateField: string
}

export default function DateFilters({ data, onFilter, setIsSearch, dateField }: DateFiltersProps) {
  const options = [
    { value: "life", label: "Tiempo de vida" },
    { value: "today", label: "Hoy" },
    { value: "last-7-days", label: "Esta semana" },
    { value: "month", label: "Este mes" },
    { value: "year", label: "Este año" },
  ]
  const [selectedFilter, setSelectedFilter] = useState(options[0].value)

  const filterByToday = (data: any[], dateField: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return data.filter(item => {
      const itemDate = new Date(item[dateField])
      return itemDate >= today && itemDate < new Date(today.getTime() + 86400000)
    })
  }

  const filterByLast7Days = (data: any[], dateField: string) => {
    const today = new Date()
    const sevenDaysAgo = new Date(today.getTime() - 7 * 86400000)
    return data.filter(item => {
      const itemDate = new Date(item[dateField])
      return itemDate >= sevenDaysAgo && itemDate <= today
    })
  }

  const filterByThisMonth = (data: any[], dateField: string) => {
    const today = new Date()
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    return data.filter(item => {
      const itemDate = new Date(item[dateField])
      return itemDate >= firstDayOfMonth && itemDate <= today
    })
  }

  const filterByThisYear = (data: any[], dateField: string) => {
    const today = new Date()
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1)
    return data.filter(item => {
      const itemDate = new Date(item[dateField])
      return itemDate >= firstDayOfYear && itemDate <= today
    })
  }

  const handleChange = (value: string) => {
    setSelectedFilter(value)
    setIsSearch(false)
    if (value === "life") {
      onFilter(data)
    } else if (value === "today") {
      const filteredData = filterByToday(data, dateField)
      onFilter(filteredData)
    } else if (value === "last-7-days") {
      const filteredData = filterByLast7Days(data, dateField)
      onFilter(filteredData)
    } else if (value === "month") {
      const filteredData = filterByThisMonth(data, dateField)
      onFilter(filteredData)
    } else if (value === "year") {
      const filteredData = filterByThisYear(data, dateField)
      onFilter(filteredData)
    }
  }

  return (
    <Select value={selectedFilter} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select date filter" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

