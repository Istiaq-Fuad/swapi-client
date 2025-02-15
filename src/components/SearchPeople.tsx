"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchPeople() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(search);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (debouncedSearchTerm)
     router.push(`?search=${debouncedSearchTerm}`);
    else
      router.push("/");
  }, [debouncedSearchTerm, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search")?.toString() || "");
    e.currentTarget.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-[400px] flex items-center gap-x-4"
    >
      <div className="relative w-full">
        <Input
          name="search"
          type="text"
          value={searchTerm}
          className="w-full pl-3 py-2 pr-10 border border-solid border-black/65"
          placeholder="Search by character name"
          onChange={handleChange}
        />
        <MagnifyingGlass
          size={28}
          className="absolute top-1/2 transform -translate-y-1/2 right-2"
        />
      </div>

      <Button type="submit">Search</Button>
    </form>
  );
}
