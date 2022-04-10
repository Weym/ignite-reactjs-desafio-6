import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  icon: string;
  text: string;
}

export function TravelType({ icon, text }: TravelTypeProps): JSX.Element {
  const isMobileResolution = useBreakpointValue({ base: false, sm: true });

  return (
    <Flex
      flexDirection="column"
      align="center"
      flexBasis="1"
      mb="6"
      minWidth={["105px", "175px"]}
    >
      {isMobileResolution ? (
        <Image
          w={["55px", "55px", "55px", "85px"]}
          src={`images/${icon}.svg`}
          mb="24px"
        />
      ) : (
        <Text color="yellow.400" fontSize="3xl" mr="2">
          ●
        </Text>
      )}
      <Text
        fontSize={["md", "md", "xl", "2xl"]}
        color="gray.700"
        fontWeight="600"
      >
        {text}
      </Text>
    </Flex>
  );
}
