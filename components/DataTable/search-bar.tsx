'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  data: any[]
  onSearch: (results: any[]) => void
  setIsSearch: (isSearch: boolean) => void
}

export default function SearchBar({ data, onSearch, setIsSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)
    setIsSearch(true)

    if (term.trim() === "") {
      onSearch(data)
      return
    }

    const results = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(term.toLowerCase())
      )
    )
    onSearch(results)
  }

  return (
    <Input
      type="text"
      placeholder="Buscar..."
      value={searchTerm}
      onChange={handleSearch}
    />
  )
}

