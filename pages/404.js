import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();

  const escape = () => {
    router.push("/test");
    // console.log("escape");
  };
  return (
    <Container onClick={escape}>
      <Text>문제가 발생했개 ㅠㅠ</Text>
      <Text>아무데나 누르개!</Text>
      <WidthImg src={require("../assets/images/index/quokka.png")} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  font-family: "Godo", Arial;
  font-size: 20px;
  color: #242526;
`;

const WidthImg = styled.img`
  display: block;
  margin: 0;
  width: 66%;
  height: auto;
`;

export default Error;
