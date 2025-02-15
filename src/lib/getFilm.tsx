import { Film } from "@/utils/types";

export const getFilms = async (filmUrl: string): Promise<Film> => {
  const filmResponse = await fetch(filmUrl);
  const response = await filmResponse.json();
  return response;
};
