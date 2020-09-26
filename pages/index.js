import React from "react";
import { Col } from "antd";
import { useRouter } from "next/router";

import {
  WidthImg,
  HalfImg,
  fullCol,
  Container,
  StartButton,
} from "../assets/css/style_index";

const Home = () => {
  const router = useRouter();

  const toTest = () => {
    router.push("/test");
  };

  return (
    <>
      <Container>
        <Col {...fullCol}>
          <div style={{ height: "80px" }}></div>
          <WidthImg src={require("../assets/images/index/header.png")} />
          <HalfImg src={require("../assets/images/index/logo.png")} />
          <WidthImg src={require("../assets/images/index/deoksun.png")} />

          <StartButton onClick={toTest}>시작 하기</StartButton>
        </Col>
      </Container>
    </>
  );
};

export default Home;

{
  /* <Button
						type="primary"
						style={{
							display: "block",
							marginTop: "-90px",
							width: "100%",
							height: "40px",
						}}
						onClick={toTest}
					></Button> */
}
