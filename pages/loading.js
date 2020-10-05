import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Col } from "antd";
import { useSelector } from "react-redux";

import { ADD_URL } from "../reducers/answer";
import { MAKE_DIRECT_FALSE } from "../reducers/answer";

import db from "../back/firestore";
import storage from "../back/cloudStorage";
import { v4 as uuid } from "uuid";
import calculator from "../back/calculator";
import result from "../assets/result.json";

import { WidthImg } from "../assets/css/style_loading";
import { Container, containerCol } from "../assets/css/style_global";

const Loading = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { ans } = useSelector((state) => state.answer);
  const { url } = useSelector((state) => state.answer);

  const [thumbUrl, setThumbUrl] = useState(null);
  const [ready, setReady] = useState(false);

  const [v, setV] = useState(null);

  useEffect(() => {
    if (ans.length !== 0) {
      console.log("ans is ", ans);
      setV(result[calculator(ans)]);

      const now = new Date();
      const uid = uuid();

      const userObj = {
        answer: ans,
        type: calculator(ans),
        created_at: now,
        updated_at: now,
      };

      db.collection("results")
        .doc(uid)
        .set(userObj)
        .then((res) => {})
        .catch((error) => {
          //alert("error: " + error.message);
          console.log(error);
        });
    } else {
      console.log("no ans.. bye");
      router.push("/result/".concat(calculator([])));
    }
  }, [ans]);

  useEffect(() => {
    if (v) {
      storage
        .ref()
        .child(v["thumbnail"])
        .getDownloadURL()
        .then((url) => {
          setThumbUrl(url);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [v]);

  useEffect(() => {
    if (thumbUrl) {
      dispatch({
        type: ADD_URL,
        data: {
          thumbUrl: thumbUrl,
        },
      });
      setReady(true);
      router.push("/result/".concat(v["id"]));
    }
  }, [thumbUrl]);

  useEffect(() => {
    dispatch({
      type: MAKE_DIRECT_FALSE,
    });
  }, [url["thumbUrl"]]);

  const checkReady = () => {
    if (ready === true) {
      setReady(false);
      router.push("/result/".concat(v["id"]));
    }
  };

  useInterval(checkReady, 500);

  return (
    <>
      <Container>
        <Col {...containerCol}>
          <WidthImg src={require("../assets/images/loading.gif")} />
        </Col>
      </Container>
    </>
  );
};

export default Loading;

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
