import { Box, Heading } from "@chakra-ui/react";

export function Divider(): JSX.Element {
  return (
    <>
      <Box
        width={["60px", "90px"]}
        height="2px"
        marginTop={["36px", "80px"]}
        marginX="auto"
        bg="gray.700"
      />
      <Heading
        marginY={["24px", "52px"]}
        marginX="auto"
        fontWeight="500"
        textAlign="center"
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </>
  );
}
