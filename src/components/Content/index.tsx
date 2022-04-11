import { Flex, Grid, Heading, Text } from "@chakra-ui/react";

export function Content(): JSX.Element {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
    >
      <Text
        fontSize={["sm", "md", "lg", "2xl"]}
        textAlign="justify"
        color="gray.700"
        flex="1"
        minWidth={["200px", "350px", "350px", "480px"]}
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex
        flex="1"
        minWidth={["200", "240", "340px"]}
        align="center"
        justify="space-between"
        marginTop="16px"
      >
        <Flex direction="column" align={["flex-start", "flex-start", "center"]}>
          <Heading
            color="yellow.400"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="600"
          >
            50
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
            60
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
            27
          </Heading>
          <Text
            color="gray.700"
            fontSize={["lg", "xl", "2xl"]}
            fontWeight={["400", "600"]}
          >
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}
