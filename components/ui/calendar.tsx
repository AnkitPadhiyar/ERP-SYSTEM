"use client"

import * as React from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export interface CalendarProps {
  selected: Date | null
  onChange: (date: Date | null) => void
  selectsRange?: boolean
  startDate?: Date | null
  endDate?: Date | null
  minDate?: Date
  maxDate?: Date
  inline?: boolean
}

export function Calendar(props: CalendarProps) {
  return (
    <ReactDatePicker
      selected={props.selected}
      onChange={props.onChange}
      selectsRange={props.selectsRange}
      startDate={props.startDate}
      endDate={props.endDate}
      minDate={props.minDate}
      maxDate={props.maxDate}
      inline={props.inline ?? true}
      className="rounded-md border p-2 shadow-sm"
      calendarClassName="bg-white dark:bg-gray-900"
      dayClassName={() => "rounded-full hover:bg-primary/20 focus:bg-primary/30"}
    />
  )
}
