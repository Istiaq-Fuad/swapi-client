import { Planet } from "@/utils/types";

export const getHomeWorld = async (url: string): Promise<Planet> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
