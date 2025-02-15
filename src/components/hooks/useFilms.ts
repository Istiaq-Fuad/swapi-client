import { getFilms } from "@/lib/getFilm";
import { useSuspenseQueries } from "@tanstack/react-query";

export const useFilms = (films: string[]) => {
  return useSuspenseQueries({
    queries: films.map((film) => ({
      queryKey: ["films", film],
      queryFn: () => getFilms(film),
      staleTime: 1000 * 60 * 5, // 5 minutes cache
    })),
  });
};
