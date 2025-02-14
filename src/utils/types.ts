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

export interface Starship {
  name: string; // The common name of this starship, such as "Death Star"
  model: string; // The model or official name of this starship, such as "T-65 X-wing"
  starship_class: string; // The class of this starship, such as "Starfighter"
  manufacturer: string; // The manufacturer(s) of this starship. Comma-separated if more than one
  cost_in_credits: string; // The cost of this starship new, in galactic credits
  length: string; // The length of this starship in meters
  crew: string; // The number of personnel needed to run or pilot this starship
  passengers: string; // The number of non-essential people this starship can transport
  max_atmosphering_speed: string; // The maximum speed of this starship in the atmosphere. "N/A" if not applicable
  hyperdrive_rating: string; // The class of this starship's hyperdrive
  MGLT: string; // The Maximum number of Megalights this starship can travel in a standard hour
  cargo_capacity: string; // The maximum number of kilograms this starship can transport
  consumables: string; // The maximum duration this starship can provide consumables without resupply
  films: string[]; // An array of Film URL Resources that this starship has appeared in
  pilots: string[]; // An array of People URL Resources that this starship has been piloted by
  url: string; // The hypermedia URL of this resource
  created: string; // The ISO 8601 date format of the time that this resource was created
  edited: string; // The ISO 8601 date format of the time that this resource was edited
}

export interface Vehicle {
  name: string; // The common name of this vehicle, such as "Sand Crawler"
  model: string; // The model or official name of this vehicle, such as "All-Terrain Attack Transport"
  vehicle_class: string; // The class of this vehicle, such as "Wheeled" or "Repulsorcraft"
  manufacturer: string; // The manufacturer(s) of this vehicle. Comma-separated if more than one
  length: string; // The length of this vehicle in meters
  cost_in_credits: string; // The cost of this vehicle new, in Galactic Credits
  crew: string; // The number of personnel needed to run or pilot this vehicle
  passengers: string; // The number of non-essential people this vehicle can transport
  max_atmosphering_speed: string; // The maximum speed of this vehicle in the atmosphere
  cargo_capacity: string; // The maximum number of kilograms this vehicle can transport
  consumables: string; // The maximum duration this vehicle can provide consumables without resupply
  films: string[]; // An array of Film URL Resources that this vehicle has appeared in
  pilots: string[]; // An array of People URL Resources that this vehicle has been piloted by
  url: string; // The hypermedia URL of this resource
  created: string; // The ISO 8601 date format of the time that this resource was created
  edited: string; // The ISO 8601 date format of the time that this resource was edited
}

export interface Species {
  name: string; // The name of this species
  classification: string; // The classification of this species, such as "mammal" or "reptile"
  designation: string; // The designation of this species, such as "sentient"
  average_height: string; // The average height of this species in centimeters
  average_lifespan: string; // The average lifespan of this species in years
  eye_colors: string; // A comma-separated string of common eye colors, "none" if not applicable
  hair_colors: string; // A comma-separated string of common hair colors, "none" if not applicable
  skin_colors: string; // A comma-separated string of common skin colors, "none" if not applicable
  language: string; // The language commonly spoken by this species
  homeworld: string | null; // The URL of the homeworld planet resource, or null if unknown
  people: string[]; // An array of People URL Resources that belong to this species
  films: string[]; // An array of Film URL Resources that this species has appeared in
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
