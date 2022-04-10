import { Box } from "@chakra-ui/react";

export function Divider(): JSX.Element {
  return (
    <Box
      width={["60px", "90px"]}
      height="2px"
      marginTop={["36px", "80px"]}
      marginX="auto"
      bg="gray.700"
    />
  );
}
