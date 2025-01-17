"use client"

import { Button } from "@/components/ui/button"
import { FileSpreadsheet, PlusCircle } from 'lucide-react'
import React from "react"
import exportDataToExcel from "@/lib/exportDataToExcel"

type TableHeaderProps = {
  title: string
  href?: string
  linkTitle?: string
  data?: any[]
  model?: string
  showExport?: boolean
  showNew?: boolean
  subtitle?: string
}

export default function TableHeader({
  title,
  subtitle,
  href,
  linkTitle,
  data,
  model,
  showExport = true,
  showNew = true,
}: TableHeaderProps) {
  function handleExportData() {
    if (data) {
      const today = new Date()
      const filename = `Exported ${title} ${today.toDateString()}`
      exportDataToExcel(data, filename)
    }
  }

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 py-3">
        <div>
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {showExport && data && (
            <Button
              onClick={handleExportData}
              size="sm"
              variant="outline"
              className="h-8 gap-1"
            >
              <FileSpreadsheet className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Exportar
              </span>
            </Button>
          )}
          {showNew && href && linkTitle && (
            <Button 
              size="sm" 
              asChild
              className="h-8 gap-1"
            >
              <a href={href}>
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  {linkTitle}
                </span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

