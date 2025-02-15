"use client";

import { Star } from "@phosphor-icons/react";
import { useFilms } from "./hooks/useFilms";

export default function PersonFilms({ filmsURLs }: { filmsURLs: string[] }) {
  const { data: films, isError } = useFilms(filmsURLs || []);

  if (isError) {
    return (
      <div className="h-full flex justify-center items-center p-6">
        Couldn't load the films. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
      <ul className="space-y-3">
        {films.map((film, index) => (
          <li
            key={index}
            className="flex items-start gap-2 pb-3 border-b border-gray-200 last:border-0"
          >
            <Star className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-900">{film.title}</p>
              <p className="text-xs text-gray-500 mt-1">
                Episode {film.episode_id}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
