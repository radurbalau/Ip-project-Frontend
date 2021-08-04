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
import { useStore } from "../zustandStore/store";
import axios from "axios";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [parola, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const addPerson = useStore((state) => state.updateStore);

  //Show/Not Show password
  const handleShowClick = () => setShowPassword(!showPassword);
  const history = useHistory();

  //do the post request
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(email, parola);
    const response = await axios.post("http://localhost:3000/dev/register", {
      email,
      parola,
    });
    console.log(response);

    addPerson(response.data[0].longValue, email, parola);
    //se duce pe /dashboard/ID
    const id = response.data[0].longValue;
    console.log(id);
    history.push(`/dashboard`);
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="72vh"
      backgroundColor="gray.200"
      alignItems="center"
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
                {/* <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText> */}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                bg="#3FC08C"
              >
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already an user ?
        <Button
          color="teal.500"
          onClick={() => {
            history.push("/login");
          }}
          style={{ color: "#00A5E5" }}
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
}
