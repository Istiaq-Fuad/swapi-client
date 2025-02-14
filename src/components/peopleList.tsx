"use client";

import { usePeople } from "./hooks/usePeople";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "./paginationWithLinks";
import { PERSON_PER_PAGE } from "@/utils/constants";
import PersonCard from "./PersonCard";

export default function PeopleList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const page = parseInt(searchParams.get("page") || "1");

  const {
    data: { count, results: people },
    isLoading,
  } = usePeople({ page, name: search });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-3">
        {people.map((person) => (
          <PersonCard key={person.url} person={person} />
        ))}
      </div>
      <PaginationWithLinks
        page={page}
        pageSize={PERSON_PER_PAGE}
        totalCount={count}
      />
    </div>
  );
}
