import { Box, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { FiChevronLeft } from "react-icons/fi";

export function Header(): JSX.Element {
  const router = useRouter();

  const homePath = router.asPath === "/";
  return (
    <Flex
      maxWidth="1300px"
      mx="auto"
      w="100%"
      as="nav"
      align="center"
      height="100"
    >
      {!homePath && (
        <Box justifyContent="flex-start" cursor="pointer">
          <FiChevronLeft size={32} />
        </Box>
      )}

      <Image margin="0 auto" src="/images/logo.svg" alt="logo" />
    </Flex>
  );
}
