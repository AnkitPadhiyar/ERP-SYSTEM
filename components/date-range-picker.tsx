"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function CalendarDateRangePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [dateRange, setDateRange] = React.useState<[Date | null, Date | null]>([
    new Date(2023, 0, 20),
    addDays(new Date(2023, 0, 20), 20),
  ])

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn("w-[300px] justify-start text-left font-normal", !dateRange[0] && "text-muted-foreground")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange[0] ? (
              dateRange[1] ? (
                <>
                  {format(dateRange[0], "LLL dd, y")} - {format(dateRange[1], "LLL dd, y")}
                </>
              ) : (
                format(dateRange[0], "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            selectsRange
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            selected={dateRange[0]}
            onChange={(update: any) => setDateRange(update)}
            inline
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
