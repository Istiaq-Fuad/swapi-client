"use client";

import { usePeopleStore } from "@/store/peopleStore";
import { usePeople } from "./hooks/usePeople";

export default function PeopleList() {
  const { filters } = usePeopleStore();
  const { data } = usePeople(filters);

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}
