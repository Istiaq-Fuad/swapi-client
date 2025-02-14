import { getFilms } from "@/lib/getFilm";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFilms = (films: string[]) => {
  return useSuspenseQuery({
    queryKey: ["films", films],
    queryFn: () => getFilms(films),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
    //
  });
};
