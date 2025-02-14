import PeopleList from "@/components/peopleList";
import SearchCharacter from "@/components/searchPeople";

export default async function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-gray-100 w-full p-12">
        <SearchCharacter />
      </div>
      <PeopleList />
    </div>
  );
}
