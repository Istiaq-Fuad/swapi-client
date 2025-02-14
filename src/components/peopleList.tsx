"use client";

import { usePeople } from "./hooks/usePeople";
import { useSearchParams } from "next/navigation";
import { PaginationWithLinks } from "./paginationWithLinks";
import { PERSON_PER_PAGE } from "@/utils/constants";

export default function PeopleList() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || undefined;
  const page = parseInt(searchParams.get("page") || "1");

  const {
    data: { count, next, previous, results },
  } = usePeople({ page, name: search });

  return (
    <div>
      {JSON.stringify(results)}
      <PaginationWithLinks page={page} pageSize={PERSON_PER_PAGE} totalCount={count} />
    </div>
  );
}
