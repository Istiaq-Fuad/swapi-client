import { searchAllPeople, searchPeopleByName } from "@/lib/getPeople";
import { usePeopleStore } from "@/store/peopleStore";
import { PeopleFilters } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

export function usePeople(filters: PeopleFilters) {
  return useQuery({
    queryKey: ["people", filters],
    queryFn: () =>
      filters.name
        ? searchPeopleByName(filters.name, filters.page)
        : searchAllPeople(filters.page),
    enabled: !!filters,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });
}
