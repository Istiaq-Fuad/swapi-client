"use client";

import { useEffect, useState } from "react";
import { useFilms } from "./hooks/useFilms";
import { useHomeWorld } from "./hooks/useHomeWorld";
import { Skeleton } from "./ui/skeleton";
import { usePeopleById } from "./hooks/usePeople";
import { FilmReel, Globe, Person, Star } from "@phosphor-icons/react";

const Starfield = () => {
  const [stars, setStars] = useState<Array<{ top: string; left: string }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 opacity-30">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkle ${Math.random() * 5 + 2}s infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default function PersonDetails({ id }: { id: string }) {
  const { data: person, isLoading: personLoading } = usePeopleById(id);
  const { data: films, isLoading: filmsLoading } = useFilms(person.films || []);
  const { data: homeworld, isLoading: homeworldLoading } = useHomeWorld(
    person.homeworld || ""
  );

  const formatValue = (value: string) =>
    value === "unknown" || value === "n/a" ? "Unknown" : value;

  if (personLoading) {
    return <div>Loading person details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 w-full bg-gray-100 text-gray-900 rounded-lg">
      <div className="relative overflow-hidden rounded-xl bg-gray-900 p-6 sm:p-8 mb-6 sm:mb-8">
        <Starfield />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <Person className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {person.name}
            </h2>
            <div className="grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-4">
              <div className="space-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Height
                </p>
                <p className="font-medium text-lg text-white">
                  {formatValue(person.height)} cm
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Mass
                </p>
                <p className="font-medium text-lg text-white">
                  {formatValue(person.mass)} kg
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Birth Year
                </p>
                <p className="font-medium text-lg text-white">
                  {formatValue(person.birth_year)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Gender
                </p>
                <p className="font-medium text-lg text-white">
                  {formatValue(person.gender)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-900 py-3 px-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-200" />
              <h3 className="text-xl font-semibold text-white">Homeworld</h3>
            </div>
          </div>
          {homeworldLoading ? (
            <div className="p-4 space-y-3">
              <Skeleton className="h-4 w-2/3 bg-gray-300" />
              <Skeleton className="h-4 w-1/2 bg-gray-300" />
              <Skeleton className="h-4 w-3/4 bg-gray-300" />
            </div>
          ) : (
            <div className="p-4">
              <div className="grid grid-cols-2 gap-y-3">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Name
                  </p>
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
          )}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-900 py-3 px-4">
            <div className="flex items-center gap-2">
              <FilmReel className="h-5 w-5 text-gray-200" />
              <h3 className="text-xl font-semibold text-white">Films</h3>
            </div>
          </div>
          {filmsLoading ? (
            <div className="p-4 space-y-3">
              <Skeleton className="h-4 w-full bg-gray-300" />
              <Skeleton className="h-4 w-full bg-gray-300" />
              <Skeleton className="h-4 w-2/3 bg-gray-300" />
            </div>
          ) : (
            <div className="p-4">
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
          )}
        </div>
      </div>
    </div>
  );
}
