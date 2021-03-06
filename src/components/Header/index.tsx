import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiChevronLeft } from "react-icons/fi";

export function Header(): JSX.Element {
  const router = useRouter();

  const isHomePath = router.asPath === "/";

  return (
    <Flex
      maxWidth={["343px", "1200px"]}
      mx="auto"
      w="100%"
      as="nav"
      align="center"
      height={["50px", "100px"]}
    >
      {!isHomePath && (
        <Box w={["16px", "32px"]} justifyContent="flex-start" cursor="pointer">
          <Link href="/">
            <a>
              <FiChevronLeft size={"100%"} />
            </a>
          </Link>
        </Box>
      )}

      <Flex margin="0 auto">
        <Link href="/">
          <a>
            <Image
              cursor="pointer"
              width={["81px", "184px"]}
              src="/images/logo.svg"
              alt="logo"
            />
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}
