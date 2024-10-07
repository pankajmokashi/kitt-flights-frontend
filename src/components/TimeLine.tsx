// TimeLine component
// Renders flight data in FlightCard slider

import React from "react";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";

function TimeLine() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] h-[500px] overflow-y-auto scroll-bar pr-2 pb-16 lg:pb-0">
      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[1px] after:bg-black dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-3 rounded-full border-2 border-black"></div>
          </div>
        </div>

        <div className="grow pt-0.5 flex flex-col">
          <div className="text-start">
            <p className="text-[10px] sm:text-xs text-gray-500">
              Sat 28 Sept•2:15
            </p>
            <h3 className="max-w-56 text-xs sm:text-sm sm:mt-1 flex gap-x-1.5 font-semibold text-gray-800 dark:text-white ">
              DXB • Dubai International Airport
            </h3>
          </div>

          <div className="flex gap-3 justify-end py-4 sm:py-0">
            <div>
              <Image
                src="/images/lufthansa.png"
                width={30}
                height={30}
                alt="emirates"
                className="border"
              />
            </div>

            <div className="text-[10px] sm:text-xs text-gray-800 text-start">
              <p className="leading-4 sm:pb-0.5">
                Saudi Arabian Airlines • SV553
              </p>
              <p className="leading-4 sm:pb-0.5">Economy • A330</p>
              <p>Flight time 3h 45m</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:border after:border-dashed after:border-slate-400">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-3 rounded-full border-2 border-black"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-6 sm:pb-8 text-start">
          <p className="text-[10px] sm:text-xs text-gray-500">
            Sat 28 Sept•2:15
          </p>
          <h3 className="max-w-56 text-xs sm:text-sm sm:mt-1 flex gap-x-1.5 font-semibold text-gray-800 dark:text-white ">
            RUH • King Khalid International Airport
          </h3>
        </div>
      </div>

      <div className="flex gap-x-3 mt-[1px]">
        <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:border after:border-dashed after:border-slate-400"></div>

        <div className="grow pb-8 sm:pb-12 ml-16 text-start flex gap-2 items-center">
          <span>
            <ClockIcon className="w-4 h-4" strokeWidth={2} />
          </span>
          <p className="textxs-sm text-sm">Layover 2h 25m</p>
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[1px] after:bg-black dark:after:bg-neutral-700">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-3 rounded-full border-2 border-black"></div>
          </div>
        </div>

        <div className="grow pt-0.5 flex flex-col">
          <div className="text-start">
            <p className="text-[10px] sm:text-xs text-gray-500">
              Sat 28 Sept•2:15
            </p>
            <h3 className="max-w-56 text-xs sm:text-sm text-start sm:mt-1 flex gap-x-1.5 font-semibold text-gray-800 dark:text-white ">
              RUH • King Khalid International Airport
            </h3>
          </div>

          <div className="flex gap-2 justify-end py-4 sm:py-0">
            <div>
              <Image
                src="/images/lufthansa.png"
                width={30}
                height={30}
                alt="emirates"
                className="border"
              />
            </div>

            <div className="text-[10px] sm:text-xs text-gray-800 text-start">
              <p className="leading-4 sm:pb-0.5">
                Saudi Arabian Airlines • SV553
              </p>
              <p className="leading-4 sm:pb-0.5">Economy • A330</p>
              <p>Flight time 3h 45m</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px">
          <div className="relative z-10 size-7 flex justify-center items-center">
            <div className="size-3 rounded-full border-2 border-black"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8 text-start">
          <p className="text-[10px] sm:text-xs text-gray-500">
            Sat 28 Sept•2:15
          </p>
          <h3 className="max-w-56 text-xs sm:text-sm sm:mt-1 flex gap-x-1.5 font-semibold text-gray-800 dark:text-white ">
            CDG • Paris-Charles de Gualle Airport
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
