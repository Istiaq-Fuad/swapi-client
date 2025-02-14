import PeopleList from "@/components/peopleList";
import SearchCharacter from "@/components/searchPeople";
import { Suspense } from "react";

export default async function Home({}) {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-gray-100 w-full p-12">
        <SearchCharacter />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PeopleList />
      </Suspense>
    </div>
  );
}
