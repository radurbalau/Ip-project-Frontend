import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Badge, Stack } from "@chakra-ui/react";
import { FormControl, Heading } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function CampaignPage() {
  const [email, setEmail] = useState("");
  const [linkPrimit, setLinkPrimit] = useState("");
  const [nrAccesari, setNrAccesari] = useState(-1);
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  const location = useLocation();
  console.log(location.pathname);
  console.log(location.state);
  const title = "TITLU";
  const creatorContinut = "CreatorContinut";
  const descriere = "descriere";
  const linkVideo = "http://localhost:3000/campaign/1";

  async function sendLink(e) {
    e.preventDefault();
    console.log(e);
    //history.push(/plm)
    // const response = await axios.post(
    //   "https://fyyzj4b5r9.execute-api.us-east-1.amazonaws.com/dev/campaign/link",
    //   {
    //     email,
    //     campaign_id,
    //     link,
    //   }
    // );

    //primesc un link pe care sa il dau mai departe
    //pe linkPrimit  il primesc si il setez
  }

  async function seeNumberOfAccesses() {
    const response = await axios.post(
      "https://fyyzj4b5r9.execute-api.us-east-1.amazonaws.com/dev/campaign/link/access/number",
      {
        linkPrimit,
      }
    );
  }

  return (
    <div>
      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
        position={"relative"}
      >
        <Box maxW="lg" borderWidth="3px" borderRadius="lg" overflow="hidden">
          {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}
          <Box p="6" size="lg">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h1"
              lineHeight="tight"
              isTruncated
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                {title}
              </Heading>
            </Box>
          </Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {linkVideo}
              </Badge>
            </Box>
            <div>{creatorContinut}</div>
            <div>{descriere}</div>
            <form onSubmit={sendLink}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                // boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <Input
                      placeholder="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  bg="#3FC08C"
                >
                  add your email
                </Button>
              </Stack>
            </form>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
              bg="#3FC08C"
              onClick={seeNumberOfAccesses}
            >
              Vezi nr de accesari
            </Button>
            {nrAccesari > 0 ? <div>{nrAccesari}</div> : <div></div>}
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
