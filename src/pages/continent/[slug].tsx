import { Flex } from "@chakra-ui/react";

import api from "../../services/api";

import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Continent() {
  return (
    <Flex direction="column" align="center">
      <Header />
      <ContinentBanner />
      <Flex maxWidth="1160px" direction="column">
        <Content />
        <Cities />
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
