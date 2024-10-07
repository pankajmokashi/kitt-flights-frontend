export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export interface FlightSearchContextType {
  departureAirport: Airport | null;
  setDepartureAirport: (airport: Airport | null) => void;

  destinationAirport: Airport | null;
  setDestinationAirport: (airport: Airport | null) => void;

  departureDate: Date | undefined;
  setDepartureDate: (date: Date | undefined) => void;

  returnDate: Date | undefined;
  setReturnDate: (date: Date | undefined) => void;

  swapAirports: () => void;

  error: string | null;
  setError: (error: string | null) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
}
