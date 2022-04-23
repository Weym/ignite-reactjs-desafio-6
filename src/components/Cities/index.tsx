import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface City {
  name: string;
  country: string;
  flagUrl: string;
  image: string;
}

interface CitiesProps {
  cities: City[];
}

export function Cities({ cities }: CitiesProps): JSX.Element {
  return (
    <Flex direction="column" marginBottom={["5px", "35px"]}>
      <Heading
        fontSize={["xl", "2xl", "3xl", "4xl"]}
        marginBottom={["20px", "25px", "30px", "40px"]}
      >
        Cidades +100
      </Heading>
      <Flex
        gap="45px"
        flexWrap="wrap"
        justify={["center", "center", "center", "start"]}
      >
        {cities.map((city) => {
          const { country, flagUrl, image, name } = city;
          return (
            <Box borderTopRadius="4px" overflow="hidden" width="256px">
              <Image src={image} height="173px" width="100%" />
              <Flex
                border="1px"
                borderColor="yellow.300"
                paddingX="24px"
                paddingY="20px"
                justify="space-between"
              >
                <Flex direction="column">
                  <Heading
                    fontSize="xl"
                    fontWeight="600"
                    marginBottom="12px"
                    lineHeight="25px"
                  >
                    {name}
                  </Heading>
                  <Text
                    fontSize="md"
                    fontWeight="500"
                    color="gray.500"
                    lineHeight="26px"
                  >
                    {country}
                  </Text>
                </Flex>
                <Image src={flagUrl} height="30px" marginY="auto" />
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
