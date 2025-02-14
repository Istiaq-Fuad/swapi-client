import { People, PeopleFilters } from "@/utils/types";
import { create } from "zustand";

interface PeopleStore {
  filters: PeopleFilters;
  setFilters: (newFilters: PeopleFilters) => void;
}

export const usePeopleStore = create<PeopleStore>((set) => ({
  filters: { name: undefined, page: 1 },
  setFilters: (newFilters) =>
    set((state) => ({ filters: { ...state.filters, ...newFilters } })),
}));
