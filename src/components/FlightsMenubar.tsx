// FlightsMenubar component
// Render selected values in menubar of flights page and onclick opens searchbar

import React, { useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Separator } from "./ui/separator";
import { FlightSearchContext } from "@/contexts/FlightSearchContext";
import { format } from "date-fns";

function FlightsMenubar() {
  const context = useContext(FlightSearchContext);

  if (!context) {
    throw new Error(
      "FlightSearchContext must be used within a FlightSearchProvider"
    );
  }

  const { departureAirport, destinationAirport, departureDate, returnDate } =
    context;

  const formatDate = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, "MMM dd");
      return formattedDate;
    }
  };

  return (
    <>
      <div className="flex items-center gap-1 px-4">
        <span className="font-semibold">
          {departureAirport ? departureAirport.code : ""}
        </span>
        <span className="text-gray-500 max-w-32 text-start hidden sm:line-clamp-1">
          {departureAirport ? departureAirport.name : "Where from?"}
        </span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center gap-1 px-4">
        <span className="font-semibold">
          {destinationAirport ? destinationAirport.code : ""}
        </span>
        <span className="text-gray-500 max-w-32 text-start hidden sm:line-clamp-1">
          {destinationAirport ? destinationAirport.name : "Where to?"}
        </span>
      </div>
      <Separator orientation="vertical" className="hidden sm:block" />
      <div className="hidden md:flex items-center gap-1 px-4 font-semibold">
        {departureDate ? (
          <span>{formatDate(departureDate)}</span>
        ) : (
          <span></span>
        )}
        {returnDate ? <span> - {formatDate(returnDate)}</span> : <span></span>}
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center gap-1 pl-4">
        <span className="p-2 bg-gray-200 rounded-full hover:opacity-70">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </span>
      </div>
    </>
  );
}

export default FlightsMenubar;
