// LoadingComponent
// Render flights results - loading modal

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import SkeletonCard from "./SkeletonCard";
import { FlightSearchContext } from "@/contexts/FlightSearchContext";

function LoadingComponent() {
  const isOpen = true;
  const [fetchingFlights, setFetchingFlights] = useState(false);
  const [attachingRules, setAttachingRules] = useState(false);
  const [displayData, setDisplayData] = useState(false);
  const context = useContext(FlightSearchContext);

  if (!context) {
    throw new Error(
      "FlightSearchContext must be used within a FlightSearchProvider"
    );
  }

  const { setLoading } = context;

  useEffect(() => {
    const handleAsyncOperations = async () => {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setFetchingFlights(true);
          resolve();
        }, 1000);
      });

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setAttachingRules(true);
          resolve();
        }, 1000);
      });

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setDisplayData(true);
          resolve();
        }, 1000);
      });

      setLoading(false);
    };

    handleAsyncOperations();
  });

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="absolute top-[110px] left-0 w-full">
        <div className="loader-line"></div>
      </div>

      <div className="h-[calc(100vh-110px)] p-16">
        <Dialog open={isOpen}>
          <DialogTrigger></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription asChild>
                <div className="w-full">
                  <div className="flex justify-center">
                    <video width={150} autoPlay loop muted>
                      <source src="/videos/paperplane.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mx-auto w-48 py-6">
                    <div className="flex gap-4 mb-2">
                      <div className="w-4 h-5">
                        {fetchingFlights ? (
                          <CheckCircleIcon color="green" />
                        ) : (
                          <Loader />
                        )}
                      </div>
                      <div>Searching 400+ flights</div>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="w-4 h-5">
                        {fetchingFlights ? (
                          attachingRules ? (
                            <CheckCircleIcon color="green" />
                          ) : (
                            <Loader />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                      <span
                        className={`${
                          !fetchingFlights ? "opacity-50" : "opacity-100"
                        }`}
                      >
                        Attaching company rules
                      </span>
                    </div>
                    <div className="flex gap-4 mb-2">
                      <div className="w-4 h-5">
                        {attachingRules && fetchingFlights ? (
                          displayData ? (
                            <CheckCircleIcon color="green" />
                          ) : (
                            <Loader />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                      <span
                        className={`${
                          !attachingRules ? "opacity-50" : "opacity-100"
                        }`}
                      >
                        Serving best results
                      </span>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
}

export default LoadingComponent;
