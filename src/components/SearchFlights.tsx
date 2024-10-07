// SearchFlights component
// Component handles empty search boxes and navigate to flights page

import { FlightSearchContext } from "@/contexts/FlightSearchContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function SearchFlights() {
  const context = useContext(FlightSearchContext);
  const router = useRouter();

  if (!context) {
    throw new Error(
      "FlightSearchContext must be used within a FlightSearchProvider"
    );
  }

  const {
    departureAirport,
    destinationAirport,
    departureDate,
    setError,
    setLoading,
  } = context;

  const handleSearch = () => {
    if (!departureAirport) {
      setError("Please enter a departure airport.");
    } else if (!destinationAirport) {
      setError("Please enter a destination airport.");
    } else if (!departureDate) {
      setError("Please enter a departure date.");
    } else {
      setError("");
      setLoading(true);
      router.push("/flights");
    }
  };

  return (
    <Button
      className="px-10 py-6 text-md bg-[#003E39] text-white w-full"
      onClick={handleSearch}
    >
      <span>
        <MagnifyingGlassIcon strokeWidth="3" className="block h-4 w-4" />
      </span>
      <span>Search flights</span>
    </Button>
  );
}

export default SearchFlights;
