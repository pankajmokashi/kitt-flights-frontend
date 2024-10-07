"use client";

// DatePicker component
// Created using calendar and popover components of Shadcn for selecting departureDate and returnDate

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  title: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  minDate: Date;
}

export function DatePicker({ title, date, setDate, minDate }: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelectDate = (date: Date | undefined) => {
    setDate(date);
    setOpen(false);
  };

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <div
          className="border px-4 text-left font-normal w-72 md:w-[190px] h-12 input-width"
          onClick={() => setOpen(!open)}
        >
          {date ? (
            <div className="h-full relative pt-5 flex items-center justify-start text-black">
              <span>{format(date, "PPP")}</span>
              <span className="absolute top-1 left-0 text-xs text-gray-500">
                {title}
              </span>
            </div>
          ) : (
            <div className="h-full flex items-center justify-start text-gray-500">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{title}</span>
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(val) => handleSelectDate(val)}
          initialFocus
          disabled={(day) => day < minDate}
        />
      </PopoverContent>
    </Popover>
  );
}
