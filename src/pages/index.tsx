import { Flex, Heading } from "@chakra-ui/react";

import { GetStaticProps } from "next";

import { Continent } from "../@interfaces/continent";

import api from "../services/api";

import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

interface IHomeProps {
  continents: Continent[];
}

export default function Home({ continents }: IHomeProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Carousel continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("continents");

  return { props: { continents: data } };
};
