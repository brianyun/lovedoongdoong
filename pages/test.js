import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { ADD_ANSWER } from "../reducers/answer";
import { CLEAR_URLS } from "../reducers/answer";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import list from "../assets/list.json";
import styled from "styled-components";

import { Container, containerCol } from "../assets/css/style_global";
import { Col } from "antd";

const Test = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const maxCount = list.arr.length;
  const [answerArr, setAnswerArr] = useState([]);
  const [index, setIndex] = useState(1);

  const handler = (ans) => {
    setAnswerArr((prevArr) => [...prevArr, ans]);

    if (index === 10) {
      ans === 0
        ? setIndex(11)
        : (setAnswerArr((prevArr) => [...prevArr, 9]), setIndex(12));
    } else if (index === 11) {
      setAnswerArr((prevArr) => [...prevArr, 9]);
      setIndex(13);
    } else {
      if (index === maxCount) {
        router.push("/loading");
        return;
      }
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    if (answerArr.length === maxCount) {
      console.log("AnswerArr is: " + answerArr);
      dispatch({ type: CLEAR_URLS });
      dispatch({
        type: ADD_ANSWER,
        data: answerArr,
      });
    }
  });

  return (
    <>
      <ContainerExtended>
        <Col {...containerCol}>
          <Question index={index} handler={handler} />
          <ProgressBar i={list.arr[index - 1].progress} length={12} />
        </Col>
      </ContainerExtended>
    </>
  );
};

const ContainerExtended = styled(Container)`
  width: 80%;
  transform: translateX(10%);
`;

export default Test;
