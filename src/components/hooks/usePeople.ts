import { searchAllPeople, searchPeopleByName } from "@/lib/getPeople";
import { PeopleFilters } from "@/utils/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePeople(filters: PeopleFilters) {
  return useSuspenseQuery({
    queryKey: ["people", filters],
    queryFn: () =>
      filters.name
        ? searchPeopleByName(filters.name, filters.page)
        : searchAllPeople(filters.page),
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}
