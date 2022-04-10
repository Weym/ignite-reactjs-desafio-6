import type { NextPage } from "next";
import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        marginY={["24px", "52px"]}
        marginX="auto"
        fontWeight="500"
        textAlign="center"
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Carousel />
    </Flex>
  );
};

export default Home;
