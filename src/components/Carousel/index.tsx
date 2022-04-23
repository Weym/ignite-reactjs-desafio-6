import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Continent {
  id: string;
  name: string;
  image: string;
  short_description: string;
}

interface CarouselProps {
  continents: Continent[];
}

export function Carousel({ continents }: CarouselProps): JSX.Element {
  continents;
  return (
    <Flex
      mx="auto"
      w="100%"
      h="100%"
      maxWidth="1240px"
      height={["250px", "350px", "450px"]}
      marginBottom={["24px", "40px"]}
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
        {continents.map((continent) => {
          const { id, name, image, short_description } = continent;
          return (
            <SwiperSlide key={id}>
              <Flex
                width="100%"
                height="100%"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                bg="rgba(28, 20, 1, 0.35)"
                _before={{
                  content: '""',
                  bgImage: `${image}`,
                  bgSize: "cover",
                  pos: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                  zIndex: -10,
                }}
              >
                <Link href={`/continent/${id}`}>
                  <a>
                    <Heading
                      fontSize={["2xl", "3xl", "4xl", "5xl"]}
                      fontWeight="700"
                      color="gray.100"
                    >
                      {name}
                    </Heading>
                    <Text
                      fontSize={["0.9rem", "1xl", "2xl"]}
                      fontWeight="700"
                      color="gray.100"
                      marginTop={["8px", "16px"]}
                    >
                      {short_description}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
