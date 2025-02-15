import GlobalLoading from "@/components/GlobalLoading";
import PeopleList from "@/components/PersonList";
import SearchPeople from "@/components/SearchPeople";
import { Suspense } from "react";

export default async function Home({}) {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-gray-100 w-full p-12">
        <SearchPeople />
      </div>
      <Suspense fallback={<GlobalLoading />}>
        <PeopleList />
      </Suspense>
    </div>
  );
}
