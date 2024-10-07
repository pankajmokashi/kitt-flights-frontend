// FlightCardSlider component
// Render flight card-data slider using shadcn sheet component

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@radix-ui/react-separator";
import TimeLine from "./TimeLine";
import FlightCard from "./FlightCard";

function FlightCardSlider() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div className="border-2 rounded-md mb-4 hover:bg-gray-100 cursor-default">
            <FlightCard />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="pb-2 font-[family-name:var(--font-geist-mono)]">
              Flight details
            </SheetTitle>
            <Separator className="border-y" />
            <SheetDescription className="pt-4" asChild>
              <div className="w-full">
                <TimeLine />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default FlightCardSlider;
