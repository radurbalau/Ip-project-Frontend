import { useState } from "react";
import { Flex, Box, Link, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import { useStore } from "../zustandStore/store";
import { Button } from "@chakra-ui/react";

//one button from navbar
const MenuItem = ({ children, isLast, to = "/" }) => {
  const history = useHistory();

  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Button
        color="#00A5E5"
        onClick={() => {
          history.push(to);
        }}
      >
        <b>{children}</b>
      </Button>
    </Text>
  );
};

//Navbarul
const Header = (props) => {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const user = useStore((state) => state.bears);
  return (
    <Flex
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box
        w="300px"
        onClick={() => {
          history.push("/home");
        }}
        color="#00A5E5"
      >
        <Text as="button" fontSize="3xl" fontWeight="bold" onClick={toggleMenu}>
          INSTA-BENEFIT
        </Text>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/home" isLast={false}>
            HomePage
          </MenuItem>

          <MenuItem to="/dashboard" isLast={false}>
            Dashboard
          </MenuItem>

          <MenuItem to="/login" isLast={true}>
            Are you a content creator ?
          </MenuItem>

          {/* <MenuItem to="/search" isLast>
            Search
          </MenuItem> */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
