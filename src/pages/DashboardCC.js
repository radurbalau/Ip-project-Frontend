import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { Box, Container, Button } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useStore } from "../zustandStore/store";
import { Input, InputGroup, Heading } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { FormControl } from "@chakra-ui/react";

export default function Dashboard() {
  // const { state } = useLocation();
  //aici am idul userului
  const [link, setLink] = useState("sdadsasad");
  const [description, setDescription] = useState("sadsds");
  const [title, setTitle] = useState("dsadsa");
  const [copied, setCopied] = useState(false);
  const [campaigns, setCampaings] = useState([
    {
      title: "title",
      description: "descrsssssssssssssssssssssssssssssssiption",
    },
    {
      title: "title",
      description: "descrsssssssssssssssssssssssssssssssiption",
    },
  ]);

  const [selected, setSel] = useState(undefined);
  const [email, setEmail] = useState("");
  const user = useStore((state) => state.bears);
  const id = user.id;
  const [ownLink, setOwnLink] = useState("dsadasdas");
  const theme = extendTheme({
    layerStyles: {
      base: {
        bg: "gray.50",
        border: "2px solid",
        borderColor: "gray.500",
      },
      selected: {
        bg: "teal.500",
        color: "teal.700",
        borderColor: "orange.500",
      },
    },
  });

  function ValidateEmail(inputText) {
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.email.match(mailformat)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/dev/campaign", {
        headers: {
          "Access-Control-Allow-Headers": "*",
        },
      })
      .then((response) => {
        setCampaings(
          response.data.data.records.map((e) => ({
            id: e[0].longValue,
            description: e[1].stringValue,
            link: e[2].stringValue,
            title: e[3].stringValue,
            userId: e[4].longValue,
          }))
        );
        console.log(response.data.data.records);
      })
      .catch(() => {});
  }, []);
  async function addCampaign(e) {
    e.preventDefault();
    console.log(e);
    //history.push(/plm)
    console.log(link, description, title);
    const response = await axios.post("http://localhost:3000/dev/campaign", {
      description,
      link,
      title,
      user_id: id,
    });
    console.log(response);
  }
  if (selected) {
    return (
      <div>
        {/* <h1>Dashboard</h1> */}
        <Container maxW={"8xl"} minW={"2xl"} mt="120" mb="120">
          <Box w="100%" align="center" minw={"2xl"}>
            <Box
              maxW="2xl"
              borderWidth="3px"
              borderRadius="lg"
              overflow="hidden"
              align={"center"}
            >
              <Box backgroundColor="#4BC087">
                <Heading>{title}</Heading>
              </Box>
              <Box
                p="6"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/spikes.png"
                  })`,
                  backgroundRepeat: "repeat",
                }}
              >
                <Box fontWeight="semibold" as="h4" lineHeight="tight">
                  {description}
                </Box>
              </Box>
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </Box>
          </Box>
          <Box align={"center"}>
            <Button
              size="lg"
              onClick={() => {
                if (ValidateEmail({ email }) == true) {
                  console.log("buna ziua");
                  axios
                    .post("http://localhost:3000/dev/campaign/link", {
                      campaign_id: selected.id,
                      email,
                    })
                    .then((e) => {
                      console.log("buna ziua", e);
                      setOwnLink(e.data.link);
                    })
                    .catch((e) => {});
                }
              }}
            >
              Generate link
            </Button>
          </Box>

          <Box align={"center"} mt="10" mb="20">
            {ownLink && (
              <Box
                align={"center"}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
              >
                <Box m="5">
                  <Text m="5" mt="0" as="h1">
                    Here is your Link !
                  </Text>
                  <Heading m="5" mb="0" as="h4" size="md">
                    {ownLink}
                  </Heading>
                  <Button
                    mt="5"
                    onClick={() => {
                      setCopied(true);
                      console.log("link copied", ownLink);
                      var textField = document.createElement("textarea");
                      textField.innerText = ownLink;
                      document.body.appendChild(textField);
                      textField.select();
                      document.execCommand("copy");
                      textField.remove();
                    }}
                  >
                    {copied === true ? (
                      <Text color="#4BC087">Copied</Text>
                    ) : (
                      <Text> Click to copy link </Text>
                    )}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <Container maxW={"8xl"} minW={"2xl"} mt="120" mb="120">
        {id >= 0 ? (
          <Box
            w="100%"
            h="400"
            bg="#4BC087"
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box p="10">
              <form onSubmit={addCampaign}>
                <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
                  <FormControl>
                    <InputGroup>
                      <Input
                        placeholder="link"
                        onChange={(e) => {
                          setLink(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <Input
                        placeholder="descr"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <Input
                        placeholder="titles"
                        onChange={(e) => {
                          setTitle(e.target.value);
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
                    addCampaign
                  </Button>
                </Stack>
              </form>
            </Box>
          </Box>
        ) : (
          <Container
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/spikes.png"})`,
              backgroundRepeat: "repeat",
            }}
          ></Container>
        )}
        <Box w="100%" alignItems="center" minw={"2xl"}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {campaigns.map((e) => (
              <div>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  onClick={() => setSel(e)}
                  textAlign={"center"}
                >
                  <Box backgroundColor="#4BC087">
                    <Heading>{e.title}</Heading>
                  </Box>
                  <Box
                    p="6"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/spikes.png"
                      })`,
                      backgroundRepeat: "repeat",
                    }}
                  >
                    <Box fontWeight="semibold" as="h4" lineHeight="tight">
                      {e.description}
                    </Box>
                  </Box>
                </Box>
              </div>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
