import { Flex, Image, Text } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes(): JSX.Element {
  return (
    <Flex
      mx="auto"
      mt="103px"
      maxW="1160px"
      width="100%"
      h="145px"
      align="center"
      justify={["center", "center", "center", "space-between", "space-between"]}
      flexWrap="wrap"
    >
      <TravelType icon="cocktail" text="vida noturna" />
      <TravelType icon="surf" text="praia" />
      <TravelType icon="building" text="moderno" />
      <TravelType icon="museum" text="clássico" />
      <TravelType icon="earth" text="e mais..." />
    </Flex>
  );
}
