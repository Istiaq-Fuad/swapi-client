import { getHomeWorld } from "@/lib/getHomeWorld";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useHomeWorld = (homeWorld: string) => {
  return useSuspenseQuery({
    queryKey: ["homeWorld", homeWorld],
    queryFn: () => getHomeWorld(homeWorld),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
};
