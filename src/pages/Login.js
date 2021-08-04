import React from "react";

import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useStore } from "../zustandStore/store";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [parola, setPassword] = useState("");

  const addPerson = useStore((state) => state.updateStore);

  const handleShowClick = () => setShowPassword(!showPassword);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    //history.push(/plm)
    console.log(email, parola);
    const response = await axios.post("http://localhost:3000/dev/login", {
      email,
      parola,
    });
    console.log(response);

    addPerson(response.data[0], response.data[1], response.data[2]);
    //se duce pe /dashboard/ID
    const id = response.data[0].longValue;

    history.push(`/dashboard`);
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="72vh"
      alignItems="center"
      backgroundColor="gray.200"
      maxH={"670"}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "50px" }}
      >
        <Avatar bg="#008A5A" />
        <Heading color="#008A5A">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
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
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?
        <Button
          color="teal.500"
          onClick={() => {
            history.push("/sign-up");
          }}
          style={{ color: "#00A5E5" }}
        >
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
}
