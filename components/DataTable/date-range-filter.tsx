"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateRangeFilterProps {
  data: any[]
  onFilter: (filteredData: any[]) => void
  setIsSearch: (isSearch: boolean) => void
  className?: string
  dateField: string
}

export default function DateRangeFilter({ data, onFilter, setIsSearch, className, dateField }: DateRangeFilterProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate)
    if (newDate?.from && newDate?.to) {
      const filteredData = data.filter((item) => {
        const itemDate = new Date(item[dateField])
        return itemDate >= newDate.from! && itemDate <= newDate.to!
      })
      onFilter(filteredData)
      setIsSearch(false)
    } else {
      onFilter(data)
      setIsSearch(true)
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

