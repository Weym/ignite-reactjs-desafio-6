import { Flex } from "@chakra-ui/react";

import api from "../../services/api";

import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { GetStaticPaths, GetStaticProps } from "next";

interface City {
  name: string;
  country: string;
  flagUrl: string;
  image: string;
}

interface Continent {
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

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex direction="column" align="center">
      <Header />
      <ContinentBanner name={continent.name} banner={continent.image} />
      <Flex maxWidth="1160px" direction="column">
        <Content continent={continent} />
        <Cities cities={continent.featuredCities} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<Continent[]>("/continents");

  const slugs = data.map((continent) => continent.id);

  return {
    paths: slugs.map((slug) => {
      return { params: { slug } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  const { data: continent } = await api.get(`continents/${slug}`);

  return {
    props: {
      continent,
    },
  };
};
