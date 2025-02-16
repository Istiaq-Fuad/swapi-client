import GlobalLoading from "@/components/GlobalLoading";
import PeopleList from "@/components/PersonList";
import SearchPeople from "@/components/SearchPeople";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home({}) {
  return (
    <div className="min-h-screen w-full">
      <Link href="/">
        <Image
          className="absolute top-3 left-3"
          src="/logo.svg"
          alt="BabyYoda"
          height={100}
          width={100}
        />
      </Link>
      
      <div className="bg-gray-100 w-full p-12 pt-20 sm:p-12">
        <SearchPeople />
      </div>
      <Suspense fallback={<GlobalLoading />}>
        <PeopleList />
      </Suspense>
    </div>
  );
}
