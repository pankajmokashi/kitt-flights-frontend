"use client";

// Home page
// Used shadcn card component to display search boxes

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import FlightsInputCard from "@/components/FlightsInputCard";
import SearchFlights from "@/components/SearchFlights";
import { FlightSearchContext } from "@/contexts/FlightSearchContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(FlightSearchContext);

  if (!context) {
    throw new Error(
      "FlightSearchContext must be used within a FlightSearchProvider"
    );
  }

  const { error } = context;

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 md:p-20 font-[family-name:var(--font-geist-sans)] page">
      <h1 className="mt-8 text-4xl text-center">Good afternoon</h1>
      <div className="mt-8 mx-auto">
        <Card className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-screen-lg">
            <CardHeader>
              <CardTitle className="mx-auto w-full md:w-[560px] xl:w-full">
                <Badge variant="secondary" className="px-10 py-3 text-md">
                  Flights
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FlightsInputCard />
            </CardContent>
            <div className="text-red-500 flex justify-center mb-2">
              <span className="">{error}</span>
            </div>
            <CardFooter className="flex  justify-center xl:justify-end">
              <div className="w-72 md:w-[420px] xl:w-auto">
                <SearchFlights />
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}
