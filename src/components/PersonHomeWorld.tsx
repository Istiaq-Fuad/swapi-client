"use client";

import { useHomeWorld } from "./hooks/useHomeWorld";
import { formatValue } from "@/lib/utils";

export default function PersonHomeWorld({
  homeworldURL,
}: {
  homeworldURL: string;
}) {
  const { data: homeworld, isError } = useHomeWorld(homeworldURL || "");

  if (isError) {
    return (
      <div className="h-full flex justify-center items-center p-6">
        Couldn't load the HomeWorld info. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-y-4">
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Name</p>
          <p className="font-medium text-gray-900">
            {formatValue(homeworld.name)}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Climate
          </p>
          <p className="font-medium text-gray-900">
            {formatValue(homeworld.climate)}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Terrain
          </p>
          <p className="font-medium text-gray-900">
            {formatValue(homeworld.terrain)}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Population
          </p>
          <p className="font-medium text-gray-900">
            {formatValue(homeworld.population)}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Gravity
          </p>
          <p className="font-medium text-gray-900">
            {formatValue(homeworld.gravity)}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Diameter
          </p>
          <p className="font-medium text-gray-900">
            {formatValue(homeworld.diameter)}
          </p>
        </div>
      </div>
    </div>
  );
}
