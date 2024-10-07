"use client";

// FlightSearchContext useContext

import React, { createContext, useState, ReactNode } from "react";
import { Airport, FlightSearchContextType } from "../types/index";


export const FlightSearchContext = createContext<
  FlightSearchContextType | undefined
>(undefined);

// Provider component
export const FlightSearchProvider = ({ children }: { children: ReactNode }) => {
  const [departureAirport, setDepartureAirport] = useState<Airport | null>(
    null
  );
  const [destinationAirport, setDestinationAirport] = useState<Airport | null>(
    null
  );

  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false); 

  const swapAirports = () => {
    setDepartureAirport((prevDeparture) => {
      setDestinationAirport(prevDeparture);
      return destinationAirport;
    });
  };

  return (
    <FlightSearchContext.Provider
      value={{
        departureAirport,
        setDepartureAirport,
        destinationAirport,
        setDestinationAirport,
        departureDate,
        setDepartureDate,
        returnDate,
        setReturnDate,
        swapAirports,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </FlightSearchContext.Provider>
  );
};
