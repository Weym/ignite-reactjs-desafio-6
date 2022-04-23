import { Flex, Grid, Heading, HStack, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

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

interface ContentProps {
  continent: Continent;
}

export function Content({ continent }: ContentProps): JSX.Element {
  console.log(continent);
  const { citiesOnTheTop100, countries, full_description, languages } =
    continent;

  function featuredCityNames() {
    return continent.featuredCities.map((city) => city.name).join(", ");
  }

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[3, 8, 16, 20]}
      marginY={["24px", "48px", "64px", "80px"]}
    >
      <Text
        fontSize={["sm", "md", "lg", "2xl"]}
        textAlign="justify"
        color="gray.700"
        flex="1"
        minWidth={["200px", "350px", "350px", "480px"]}
      >
        {full_description}
      </Text>
      <Flex
        flex="1"
        minWidth={["200", "240", "340px"]}
        align="center"
        justify="space-between"
      >
        <Flex direction="column" align={["flex-start", "flex-start", "center"]}>
          <Heading
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="600"
          >
            {countries}
          </Heading>
          <Text
            color="gray.700"
            fontSize={["lg", "xl", "2xl"]}
            fontWeight={["400", "600"]}
          >
            países
          </Text>
        </Flex>
        <Flex direction="column" align={["flex-start", "flex-start", "center"]}>
          <Heading
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="600"
          >
            {languages}
          </Heading>
          <Text
            color="gray.700"
            fontSize={["lg", "xl", "2xl"]}
            fontWeight={["400", "600"]}
          >
            línguas
          </Text>
        </Flex>
        <Flex direction="column" align={["flex-start", "flex-start", "center"]}>
          <Heading
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="600"
          >
            {citiesOnTheTop100}
          </Heading>
          <HStack spacing="5px">
            <Text
              color="gray.700"
              fontSize={["lg", "xl", "2xl"]}
              fontWeight={["400", "600"]}
            >
              cidades +100
            </Text>
            <Tooltip
              label={featuredCityNames()}
              fontSize="md"
              aria-label="A tooltip"
              placement="bottom-start"
              shouldWrapChildren
            >
              <FiInfo />
            </Tooltip>
          </HStack>
        </Flex>
      </Flex>
    </Grid>
  );
}
