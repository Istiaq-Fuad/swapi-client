import { Film } from "@/utils/types";

export const getFilms = async (filmUrls: string[]): Promise<Film[]> => {
  const filmResponses = await Promise.all(
    filmUrls.map((url) => fetch(url).then((res) => res.json()))
  );
  return filmResponses;
};
