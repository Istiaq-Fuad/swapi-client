"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { usePeopleStore } from "@/store/peopleStore";

export default function SearchCharacter() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 800);
  const { setFilters } = usePeopleStore();

  useEffect(() => {
    setFilters({ name: debouncedSearchTerm, page: 1 });
  }, [debouncedSearchTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setSearchTerm(formData.get("search")?.toString() || "");
    e.currentTarget.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-96 flex items-center gap-x-4"
    >
      <div className="relative w-full">
        <Input
          name="search"
          type="text"
          className="min-w-60 w-full pl-3 py-2 pr-10 border border-solid border-black/65"
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
