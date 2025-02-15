export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

export interface Film {
  title: string; // The title of this film
  episode_id: number; // The episode number of this film
  opening_crawl: string; // The opening paragraphs at the beginning of this film
  director: string; // The name of the director of this film
  producer: string; // The name(s) of the producer(s) of this film. Comma separated
  release_date: string; // The ISO 8601 date format of film release at original creator country
  species: string[]; // An array of species resource URLs that are in this film
  starships: string[]; // An array of starship resource URLs that are in this film
  vehicles: string[]; // An array of vehicle resource URLs that are in this film
  characters: string[]; // An array of people resource URLs that are in this film
  planets: string[]; // An array of planet resource URLs that are in this film
  url: string; // The hypermedia URL of this resource
  created: string; // The ISO 8601 date format of the time that this resource was created
  edited: string; // The ISO 8601 date format of the time that this resource was edited
}

export interface Planet {
  name: string; // The name of this planet
  diameter: string; // The diameter of this planet in kilometers
  rotation_period: string; // The number of standard hours for one full rotation
  orbital_period: string; // The number of standard days for one full orbit around its star
  gravity: string; // The gravity of this planet, where "1" is standard G
  population: string; // The average population of sentient beings inhabiting this planet
  climate: string; // The climate of this planet, comma-separated if diverse
  terrain: string; // The terrain of this planet, comma-separated if diverse
  surface_water: string; // The percentage of surface water on this planet
  residents: string[]; // An array of People URL Resources that live on this planet
  films: string[]; // An array of Film URL Resources that this planet has appeared in
  url: string; // The hypermedia URL of this resource
  created: string; // The ISO 8601 date format of the time that this resource was created
  edited: string; // The ISO 8601 date format of the time that this resource was edited
}

export interface Person {
  name: string; // The name of this person
  birth_year: string; // The birth year, using BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin)
  eye_color: string; // The eye color of this person, "unknown" if not known, "n/a" if not applicable
  gender: string; // The gender of this person, "Male", "Female", "unknown", or "n/a" if not applicable
  hair_color: string; // The hair color, "unknown" if not known, "n/a" if not applicable
  height: string; // The height of this person in centimeters
  mass: string; // The mass of this person in kilograms
  skin_color: string; // The skin color of this person
  homeworld: string; // The URL of the homeworld planet resource
  films: string[]; // An array of film resource URLs that this person has appeared in
  species: string[]; // An array of species resource URLs that this person belongs to
  starships: string[]; // An array of starship resource URLs that this person has piloted
  vehicles: string[]; // An array of vehicle resource URLs that this person has piloted
  url: string; // The hypermedia URL of this resource
  created: string; // The ISO 8601 date format of when this resource was created
  edited: string; // The ISO 8601 date format of when this resource was last edited
}

export interface PeopleFilters {
  name?: string;
  page: number;
}
