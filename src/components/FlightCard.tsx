// FlightCard component
// Flight data slider trigger

import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

import Image from "next/image";

function FlightCard() {
  return (
    <>
      <div className="min-h-48 flex flex-col sm:flex-row">
        <div className="flex-grow p-4 lg:py-4 lg:pr-4 lg:pl-8">
          <div className="w-full h-full grid gap-2 grid-cols-12">
            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              <div className="w-full h-full flex gap-4 items-center">
                <div className="flex items-center justify-center">
                  <Image src="/images/emirates.png" alt="emirates" width={50} height={50}/>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] lg:text-xs">
                    Emirates•AT 4334
                  </p>
                  <h4 className="text-sm lg:text-base">9:45AM - 11.45AM</h4>
                </div>
              </div>
            </div>
            <div className="hidden md:block col-span-2 text-sm lg:text-base">
              <div className="w-full h-full flex flex-col justify-center">
                <div className="text-gray-500">CDG-DXB</div>
                <div className="">2h 10min</div>
              </div>
            </div>
            <div className="hidden md:block col-span-2 lg:col-span-3">
              <div className="w-full h-full flex flex-col justify-center">
                <div className="text-gray-500 min-h-5 text-xs lg:text-sm lg:min-h-6"></div>
                <div className="text-sm lg:text-base">Non stop</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              <div className="w-full h-full flex gap-4 items-center">
                <div className="flex items-center justify-center">
                  <Image src="/images/lufthansa.png" alt="emirates" width={50} height={50}/>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] lg:text-xs">
                    Lufthansa•AT 4334
                  </p>
                  <h4 className="text-sm lg:text-base">
                    11:45AM - 6.45AM{" "}
                    <sup className="text-red-700 font-medium text-[9px] lg:text-xs">
                      +1 day
                    </sup>
                  </h4>
                </div>
              </div>
            </div>
            <div className="hidden md:block col-span-2 text-sm lg:text-base">
              <div className="w-full h-full flex flex-col justify-center">
                <div className="text-gray-500">DXB-CDG</div>
                <div className="">4h 10min</div>
              </div>
            </div>
            <div className="hidden md:block col-span-2 lg:col-span-3">
              <div className="w-full h-full flex flex-col justify-center">
                <div className="text-gray-500 line-clamp-1 word-spacing text-xs lg:text-sm min-h-5 lg:min-h-6">
                  6h 35m in Lisbon, Paris
                </div>
                <div className="text-sm lg:text-base">2 stops</div>
              </div>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="hidden sm:block border bg-gray-50"
        />
        <Separator className="block sm:hidden border bg-gray-50" />
        <div className="w-full sm:w-[200px] flex gap-4 items-center sm:gap-0 sm:items-start sm:flex-col sm:justify-end p-4">
          <div className="text-xs lg:text-sm text-gray-500">from</div>
          <div className="font-semibold word-spacing text-sm lg:text-[18px] sm:mb-2 lg:mb-4">
            AED 2,456.90
          </div>
          <Button size={"sm"} className="bg-[#003E39] w-full p-0 max-w-[200px]">
            Select
          </Button>
        </div>
      </div>
    </>
  );
}

export default FlightCard;
