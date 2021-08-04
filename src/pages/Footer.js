import { Box, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="9xl"
    py="12"
    px={{
      base: "4",
      md: "8",
    }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright
        alignSelf={{
          base: "center",
          sm: "start",
        }}
      />
    </Stack>
  </Box>
);

const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} InstaBenefit, Inc. All rights reserved.
  </Text>
);

const Logo = (props) => {
  return <h2>logo</h2>;
};

const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
  </ButtonGroup>
);
export default Footer;
