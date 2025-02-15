"use client";

import { usePeople } from "./hooks/usePeople";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "./PaginationWithLinks";
import { PERSON_PER_PAGE } from "@/utils/constants";
import PersonCard from "./PersonCard";
import GlobalLoading from "./GlobalLoading";
import NoResults from "./NoResults";
import ErrorState from "./ErrorState";

export default function PeopleList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const page = parseInt(searchParams.get("page") || "1");

  const {
    data: { count, results: people },
    isLoading,
    isError,
  } = usePeople({ page, name: search });

  if (isLoading) {
    return <GlobalLoading />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (count === 0) {
    return <NoResults />;
  }

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-3">
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
