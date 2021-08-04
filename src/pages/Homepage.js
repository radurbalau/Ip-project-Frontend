import React from "react";
import Head from "next/head";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function Homepage() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/spikes.png"})`,
        backgroundRepeat: "repeat",
      }}
    >
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Container
          maxW={"3xl"}
          maxH={"670"}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/spikes.png"})`,
            backgroundRepeat: "repeat",
          }}
        >
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              REWARD <br />
              <Text as={"span"} color="#4BC087">
                your audience
              </Text>
            </Heading>
            <Text color={"gray.500"}></Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Text fontSize="2xl" mb="2">
                Have you ever considered making a giveaway to grow your
                community, but rewarding it based on how much impact people had
                on your promotion campaign?
              </Text>
              <Heading as="u" fontSize="3xl" color={"#4BC087"}>
                We have the solution
              </Heading>
              <Link to="/about" style={{ color: "#00A5E5" }}>
                <b>Learn More</b>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </>
    </div>
  );
}
