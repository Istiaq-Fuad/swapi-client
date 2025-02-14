import { getAllPeople, getPeopleById, getPeopleByName } from "@/lib/getPeople";
import { PeopleFilters } from "@/utils/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePeople(filters: PeopleFilters) {
  return useSuspenseQuery({
    queryKey: ["people", filters],
    queryFn: () =>
      filters.name
        ? getPeopleByName(filters.name, filters.page)
        : getAllPeople(filters.page),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}

export function usePeopleById(id: string) {
  return useSuspenseQuery({
    queryKey: ["people", id],
    queryFn: () => getPeopleById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}
