// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Carousel(): JSX.Element {
  return (
    <Flex
      mx="auto"
      w="100%"
      h="100%"
      maxWidth="1240px"
      height={["250px", "350px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            backgroundImage="url(/images/europe.jpg)"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                  fontSize={["2xl", "3xl", "4xl", "5xl"]}
                  fontWeight="700"
                  color="gray.100"
                >
                  Europa
                </Heading>
                <Text
                  fontSize={["0.9rem", "1xl", "2xl"]}
                  fontWeight="700"
                  color="gray.100"
                  marginTop={["8px", "16px"]}
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
