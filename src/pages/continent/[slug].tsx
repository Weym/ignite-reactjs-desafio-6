import { Flex, Heading } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

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
