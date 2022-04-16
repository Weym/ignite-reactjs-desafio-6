import { Flex, Heading } from "@chakra-ui/react";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column" align="center">
      <Header />
      <ContinentBanner />
      <Flex maxWidth="1160px" marginTop={["24px", "48px", "64px", "80px"]}>
        <Content />
      </Flex>
    </Flex>
  );
}