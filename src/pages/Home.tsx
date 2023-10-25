"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  Tooltip,
  useClipboard,
  useColorModeValue
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import photo1 from "../assets/photos/photo1.jpg";
export function Home() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  return (
    <>
      <Center py={35}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "80%" }}
          height={{ sm: "476px", md: "30rem" }}
          direction={{ base: "column", md: "row" }}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image objectFit="cover" boxSize="100%" src={photo1} alt="#" />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Text
              textAlign={"center"}
              fontSize="2xl"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "gray.400")}
              px={10}>
              Fullstack Developer
              {/* <Text fontSize={'medium'} color={'blue.400'}>Express, Remix Run, React, Golang, TypeORM, Prisma, PostgreSQL, MySQL, TypeScript, JavaScript, Html, CSS, GIT, MailerLite, </Text> */}
              <Text marginTop={5} fontSize={"medium"} color={"blue.400"}>
                I'm a fullstacker but I specialize in back-end.I have experience
                in Express, Remix Run, React, Golang, TypeORM, Prisma,
                PostgreSQL, MySQL, TypeScript, JavaScript, Html, CSS, GIT,
                MailerLite.
                <br></br>
                I'm always looking for new opportunities to grow and learn more
                iam also a fast learner and I'm always willing to learn new
                things.
              </Text>
            </Text>
            <Stack
              align="center"
              justify="space-around"
              direction={{ base: "row", md: "row" }}>
              <Tooltip
                label={hasCopied ? "Cv Copied!" : "Copy Cv"}
                closeOnClick={false}
                hasArrow>
                <Button
                  aria-label="Cv"
                  variant="ghost"
                  size="lg"
                  mt={4}
                  fontSize="2xl"
                  _hover={{
                    bg: "blue.500",
                    color: useColorModeValue("white", "gray.700"),
                  }}
                  onClick={onCopy}>
                  Checkout my CV
                </Button>
              </Tooltip>
            </Stack>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "row", md: "row" }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "row" }}>
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Box as="a" href="#">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Box>

                <Box as="a" href="#">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Box>

                <Box as="a" href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </>
  );
}
