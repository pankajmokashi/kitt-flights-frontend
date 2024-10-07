// Render card skeleton while loading data

import React from "react";
import { Skeleton } from "./ui/skeleton";

function SkeletonCard() {
  return (
    <div className="border-2 rounded-md mb-4 mx-auto w-full max-w-screen-xl">
      <div className="h-48 flex flex-col">
        <div className="h-24 p-4 flex items-center">
          <Skeleton className="w-16 h-16" />
          <div className="flex flex-col justify-between w-1/4 h-full mx-16 py-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex flex-col justify-between w-1/4 h-full mx-16 py-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
        <div className="h-24 p-4 flex items-center">
          <Skeleton className="w-16 h-16" />
          <div className="flex flex-col justify-between w-1/4 h-full mx-16 py-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex flex-col justify-between w-1/4 h-full mx-16 py-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
