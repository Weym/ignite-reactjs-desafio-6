import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  banner: string;
  name: string;
}

export function ContinentBanner({
  banner,
  name,
}: ContinentBannerProps): JSX.Element {
  return (
    <Flex w="100%" h="100%">
      <Flex
        w="100%"
        h={["150px", "250px", "300px", "500px"]}
        px={["0", "0", "24", "36"]}
        pt={["0", "0", "48", "72"]}
        // backgroundImage={banner}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        align="center"
        justify={["center", "center", "flex-start", "flex-start"]}
        bg="rgba(28, 20, 1, 0.35)"
        _before={{
          content: '""',
          bgImage: `${banner}`,
          bgSize: "cover",
          backgroundPosition: "center",
          pos: "absolute",
          height: ["150px", "250px", "300px", "500px"],
          top: [50, 100],
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -10,
        }}
      >
        <Heading
          color="gray.100"
          fontSize={["1xl", "3xl", "4xl", "5xl"]}
          textAlign={["center", "left"]}
          fontWeight="600"
        >
          {name}
        </Heading>
      </Flex>
    </Flex>
  );
}
