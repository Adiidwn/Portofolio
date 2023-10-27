
import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      id: 1,
      title: "Noesakan.Id",
      text: "(Noesantara Ikan)This is E-Commerce with Threads website, So we can find product(Noesantara fish) also request product it self  .",
      image: "../src/assets/photos/noesakan.png",
      link: "https://noesakan.vercel.app/",
    },
    {
      id: 2,
      title: "Lakoe.Id",
      text: "This is E-Commerce website for helping UMKM(Small and Medium Enterprise) for promote and selling their Product .",
      image: "../src/assets/photos/lakoe.png",
      link: "https://staging.lakoe.store/",
    },
    {
      id: 3,
      title: "Z.Id",
      text: "This is website Threads social media (clone X) we can share / post threads or images and interact with people.",
      image: "../src/assets/photos/z.png",
      link: "https://github.com/Adiidwn/nuaing/tree/dev",
    },
  ];
  console.log(cards.map((i) => i.link));

  return (
    <>
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider: Slider) => setSlider(slider)}>
          {cards &&
            cards.map((card) => (
              <>
                <Box
                  key={card.id}
                  height={"6xl"}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="crop"
                  objectFit={"cover"}
                  backgroundImage={`url(${card.image})`}>

                  {/* This is the block you need to change, to customize the caption */}
                  <Container
                    size="container.lg"
                    height="600px"
                    position="relative">
                    <Stack
                      spacing={6}
                      w={"full"}
                      maxW={"lg"}
                      position="absolute"
                      mt={-180}
                      top="50%"
                      transform="translate(0, -50%)">
                        <Heading
                          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                          ml={100}
                          >
                          {card.title}
                        </Heading>
                      <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color="GrayText">
                        {card.text}
                      </Text>
                    </Stack>
                  </Container>
                </Box>
              </>
            ))}
        </Slider>
      </Box>
    </>
  );
}
