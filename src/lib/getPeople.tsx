import { PeopleResponse, Person } from "@/utils/types";

export async function getPeopleByName(
  name: string,
  page: number
): Promise<PeopleResponse> {
  const res = await fetch(
    `https://swapi.dev/api/people/?search=${name}&page=${page}&format=json`
  );

  const people = await res.json();

  return people;
}

export async function getAllPeople(page: number): Promise<PeopleResponse> {
  const res = await fetch(
    `https://swapi.dev/api/people/?page=${page}&format=json`
  );

  const people = await res.json();

  return people;
}

export async function getPeopleById(id: string): Promise<Person> {
  const res = await fetch(`https://swapi.dev/api/people/${id}/?format=json`);
  const person = await res.json();

  return person;
}
