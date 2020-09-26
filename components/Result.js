import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import storage from "../back/cloudStorage";
import { ADD_URL } from "../reducers/answer";
import { MAKE_DIRECT_TRUE } from "../reducers/answer";
import { CLEAR_URLS } from "../reducers/answer";
import {
  RowsContainer,
  GoodBadContainer,
  WidthImg,
  Texty,
  Paragraphy,
  LineBreakText,
  GoodBadBtn,
} from "../assets/css/style_result";
import { Container, containerCol } from "../assets/css/style_global";

import result from "../assets/result.json";
import Footer from "./Footer";
import ShareGroup from "./ShareGroup";
import icons from "../back/icon_result";

const Result = ({ name }) => {
  const v = result[name];
  const dispatch = useDispatch();
  const router = useRouter();

  const { url } = useSelector((state) => state.answer);
  const { isDirect } = useSelector((state) => state.answer);

  const [thumbUrl, setThumbUrl] = useState(null);
  const [goodTitle, setGoodTitle] = useState("");
  const [goodId, setGoodId] = useState("");
  const [badTitle, setBadTitle] = useState("");
  const [badId, setBadId] = useState("");

  useEffect(() => {
    setThumbUrl(url["thumbUrl"]);

    setGoodTitle(result[v["good"]]["title"]);
    setGoodId(result[v["good"]]["id"]);
    setBadTitle(result[v["bad"]]["title"]);
    setBadId(result[v["bad"]]["id"]);
  }, [url]);

  useEffect(() => {
    dispatch({ type: CLEAR_URLS });
    if (isDirect && !thumbUrl) {
      console.log("[isDirect]");

      storage
        .ref()
        .child(v["thumbnail"])
        .getDownloadURL()
        .then((url) => {
          setThumbUrl(url);
        })
        .catch((err) => {
          return;
        });
    } else {
      dispatch({
        type: MAKE_DIRECT_TRUE,
      });
    }
  }, [isDirect]);

  useEffect(() => {
    if (isDirect && thumbUrl) {
      dispatch({
        type: ADD_URL,
        data: {
          thumbUrl: thumbUrl,
        },
      });
    }
  }, [thumbUrl]);

  const toGoodBad = (id) => {
    if (id === "") {
      return;
    }
    router.push("/result/".concat(id));
    dispatch({ type: CLEAR_URLS });
  };

  return (
    <>
      <Head>
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>
      <Container top={-10}>
        <Col {...containerCol}>
          <WidthImg src={icons["top"]} />

          <Texty
            strong
            top={10}
            font={27}
            style={{ fontFamily: "Godo", fontWeight: "bold" }}
          >
            {v["title_1"]}
          </Texty>
          <Texty
            strong
            top={-1}
            font={33}
            style={{ fontFamily: "Godo", fontWeight: "bold" }}
          >
            {v["title_2"]}
          </Texty>

          <WidthImg
            src={icons[v["id"]]}
            style={{
              width: "90%",
            }}
          />

          <Texty strong top={10} font={25} style={{ fontFamily: "NanumPen" }}>
            "{v["subtitle"]}"
          </Texty>

          <Paragraphy top={10} font={15}>
            {v["description"]}
          </Paragraphy>

          <WidthImg
            src={icons["line_horizontal"]}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          />

          <RowsContainer>
            <GoodBadContainer>
              <Texty
                font={15}
                strong
                style={{
                  fontFamily: "Godo",
                  fontWeight: "bold",
                }}
              >
                잘 맞는 친구
              </Texty>

              <GoodBadBtn onClick={() => toGoodBad(goodId)}>
                <LineBreakText font={20}>{goodTitle}</LineBreakText>
                <WidthImg src={icons[goodId]} />
              </GoodBadBtn>
            </GoodBadContainer>

            <GoodBadContainer width={4}>
              <img src={icons["line_vertical"]} style={{ height: "200px" }} />
            </GoodBadContainer>

            <GoodBadContainer>
              <Texty
                font={15}
                strong
                style={{
                  fontFamily: "Godo",
                  fontWeight: "bold",
                }}
              >
                어색한 친구
              </Texty>

              <GoodBadBtn onClick={() => toGoodBad(badId)}>
                <LineBreakText font={20}>{badTitle}</LineBreakText>
                <WidthImg src={icons[badId]} />
              </GoodBadBtn>
            </GoodBadContainer>
          </RowsContainer>

          <div style={{ height: "20px" }}></div>

          <ShareGroup
            title={v["title"] ? v["title"] : ""}
            thumbUrl={thumbUrl ? thumbUrl : ""}
          />

          <div style={{ height: "50px" }}></div>

          <Footer />
        </Col>
      </Container>
    </>
  );
};

export default Result;
