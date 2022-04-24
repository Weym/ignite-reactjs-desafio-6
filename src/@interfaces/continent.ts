import { City } from "./city";

export interface Continent {
  id: string;
  name: string;
  short_description: string;
  full_description: string;
  image: string;
  citiesOnTheTop100: number;
  countries: number;
  languages: number;
  featuredCities: City[];
}
