import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      backgroundImage="url(images/banner-background.jpg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justify="center"
    >
      <Flex width="100%" maxW="1160px">
        <Flex justify={["center", "space-between"]} align="center" w="99%">
          <Box padding="20px">
            <Heading
              color="gray.100"
              fontWeight="500"
              fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
              mb="20px"
            >
              5 Continentes,
              <br /> infinitas possibilidades.
            </Heading>

            <Text
              color="gray.300"
              mt="5"
              fontSize={["0.8rem", "xl"]}
              maxW={["100%", "100%", "100%", "550px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image
            w={["300px", "300px", "300px", "350px", "430px"]}
            display={["none", "none", "block"]}
            transform="rotate(3deg) translateY(48px)"
            src="images/airplane.svg"
            ml="8"
            alt-="Avião amarelo voando com nuvens ao seu redor  "
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
