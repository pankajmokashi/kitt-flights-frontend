// FlightsInputCard component

import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { DatePicker } from "./DatePicker";
import { FlightSearchContext } from "@/contexts/FlightSearchContext";
import SearchableSelect from "./SearchableSelect";

export default function FlightsInputCard() {
  const context = useContext(FlightSearchContext);

  if (!context) {
    throw new Error(
      "FlightSearchContext must be used within a FlightSearchProvider"
    );
  }

  const {
    departureAirport,
    setDepartureAirport,
    destinationAirport,
    setDestinationAirport,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    swapAirports,
  } = context;

  // Handle departure date change and reset return date to undefined
  const handleDepartureDateChange = (date: Date | undefined) => {
    setDepartureDate(date);
    setReturnDate(undefined); // Reset return date when departure date changes
  };

  // Ensure return date cannot be before the departure date
  const handleReturnDateChange = (date: Date | undefined) => {
    if (date && departureDate && date < departureDate) {
      alert("Return date cannot be before the departure date.");
    } else {
      setReturnDate(date);
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center w-full md:w-[560px] gap-4 xl:w-full xl:flex-row">
      <div className="flex gap-4 flex-col md:flex-row">
        <SearchableSelect
          title="Where from?"
          selectedAirport={departureAirport}
          setSelectedAirport={setDepartureAirport}
        />

        <div className="">
          <div
            className="mx-auto h-14 flex items-center justify-center"
            onClick={swapAirports}
          >
            <span className="p-3 bg-slate-200 rounded-full">
              <ArrowsRightLeftIcon className="w-6 h-6 transition rotate-90 md:rotate-0" />
            </span>
          </div>
        </div>

        <SearchableSelect
          title="Where to?"
          selectedAirport={destinationAirport}
          setSelectedAirport={setDestinationAirport}
        />
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <DatePicker
          title="Departure"
          date={departureDate}
          setDate={handleDepartureDateChange}
          minDate={new Date()}
        />
        <DatePicker
          title="Return"
          date={returnDate}
          setDate={handleReturnDateChange}
          minDate={departureDate || new Date()}
        />
      </div>
    </div>
  );
}
