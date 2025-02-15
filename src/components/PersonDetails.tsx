"use client";

import { usePeopleById } from "./hooks/usePeople";
import PersonHomeWorld from "./PersonHomeWorld";
import Starfield from "./StarField";
import PersonFilms from "./PersonFilms";
import PersonHeader from "./PersonHeader";
import { Suspense } from "react";
import FilmSkeleton from "./FilmSkeleton";
import GlobalLoading from "./GlobalLoading";
import HomeWorldSkeleton from "./HomeWorldSkeleton";
import { FilmReel, Globe } from "@phosphor-icons/react";
import ErrorState from "./ErrorState";

export default function PersonDetails({ id }: { id: string }) {
  const { data: person, isLoading: personLoading, isError } = usePeopleById(id);

  if (personLoading) {
    return <GlobalLoading />;
  }

  if (isError) {
    return <ErrorState />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 w-full bg-gray-100 text-gray-900 rounded-lg">
      <div className="relative overflow-hidden rounded-xl bg-gray-900 p-6 sm:p-8 mb-6 sm:mb-8">
        <Starfield />
        <PersonHeader person={person} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Homeworld section starts here */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm min-h-[300px]">
          <div className="bg-gray-900 py-3 px-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-200" />
              <h3 className="text-xl font-semibold text-white">Homeworld</h3>
            </div>
          </div>
          <Suspense fallback={<HomeWorldSkeleton />}>
            <PersonHomeWorld homeworldURL={person.homeworld} />
          </Suspense>
        </div>

        {/* Film section starts here */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm min-h-[300px] md:h-[300px] flex flex-col">
          <div className="bg-gray-900 py-3 px-4">
            <div className="flex items-center gap-2">
              <FilmReel className="h-5 w-5 text-gray-200" />
              <h3 className="text-xl font-semibold text-white">Films</h3>
            </div>
          </div>
          <Suspense fallback={<FilmSkeleton />}>
            <PersonFilms filmsURLs={person.films} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
