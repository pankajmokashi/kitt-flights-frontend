"use client";

// Flights page
// Used shadcn sheet component to open respected sliders
// Drawer to open searchbox and FlightCardSlider component to open flights data

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { XMarkIcon } from "@heroicons/react/24/outline";

import FlightsInputCard from "@/components/FlightsInputCard";
import FlightCardSlider from "@/components/FlightCardSlider";
import FlightsMenubar from "@/components/FlightsMenubar";
import LoadingComponent from "@/components/LoadingComponent";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import SearchFlights from "@/components/SearchFlights";
import { FlightSearchContext } from "@/contexts/FlightSearchContext";

export default function Page() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const context = useContext(FlightSearchContext);

  if (!context) {
    throw new Error(
      "FlightSearchContext must be used within a FlightSearchProvider"
    );
  }
  const { error, loading } = context;

  useEffect(() => {
    if (loading === true) {
      setOpen(false);
    }
  }, [loading]);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-mono)] relative">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between h-[106px] p-8 sm:px-16">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <div
              className="flex border p-1 rounded-full tracking-tight word-spacing text-[12px] lg:text-sm"
              onClick={() => setOpen(true)}
            >
              <FlightsMenubar />
            </div>
          </DrawerTrigger>
          <DrawerContent side="top">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription asChild>
                <div className="w-full mx-auto max-w-screen-lg">
                  <FlightsInputCard />
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <div className="text-red-500 flex justify-center mb-2">
              <span className="">{error}</span>
            </div>
            <DrawerFooter>
              <div className="w-full mx-auto max-w-screen-lg flex justify-end">
                <div className="flex items-center text-md rounded-md bg-[#003E39] text-white">
                  <SearchFlights />
                </div>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <button
          className="rounded-full border-2 p-1.5 hover:bg-gray-100"
          onClick={handleClick}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Separator />
          <div className="mx-auto max-w-screen-xl p-8 sm:px-16">
            <div className="text-gray-500 px-4 text-sm sm:text-base">
              Showing 356 of 767 results
            </div>
            <div className="py-4">
              <FlightCardSlider />
              <FlightCardSlider />
              <FlightCardSlider />
              <FlightCardSlider />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
