import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function ContinentBanner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={["150px", "250px", "300px", "500px"]}
      px={["0", "0", "24", "36"]}
      pt={["0", "0", "48", "72"]}
      backgroundImage="url(/images/europe-continent-banner.jpg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      align="center"
      justify={["center", "center", "flex-start", "flex-start"]}
    >
      <Heading
        color="gray.100"
        fontSize={["1xl", "3xl", "4xl", "5xl"]}
        textAlign={["center", "left"]}
        fontWeight="600"
      >
        Europa
      </Heading>
    </Flex>
  );
}
