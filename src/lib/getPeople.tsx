export async function searchPeopleByName(name: string, page: number) {
  const res = await fetch(
    `https://swapi.dev/api/people/?search=${name}&page=${page}&format=json`
  );

  const people = await res.json();

  return people;
}

export async function searchAllPeople(page: number) {
  const res = await fetch(
    `https://swapi.dev/api/people/?page=${page}&format=json`
  );

  const people = await res.json();

  return people;
}
