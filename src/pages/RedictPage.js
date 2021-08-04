import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Heading, Text } from "@chakra-ui/react";

export default function RedictPage({ location: { pathname } }) {
  useEffect(() => {
    axios
      .post("http://localhost:3000/dev/campaign/link/access", {
        link: `http://localhost:3000${pathname}`,
      })
      .then((e) => {
        window.location.href = e.data;
      })
      .catch((e) => {});
  }, []);
  return (
    <div>
      <Heading size="lg">Ai postat pe link cu succes </Heading>
    </div>
  );
}
