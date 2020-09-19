import React, { useEffect, useState } from "react";
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

import { WidthImg, Texty, CaptionContainer } from "../assets/css/style_loading";
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
		if (ans) {
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
		}
	}, [thumbUrl]);

	useEffect(() => {
		dispatch({
			type: MAKE_DIRECT_FALSE,
		});
	}, [url["thumbUrl"]]);

	if (typeof window !== "undefined") {
		function checkReady() {
			if (ready == false) {
				window.setTimeout(checkReady, 500);
			} else {
				router.push("/result/".concat(v["id"]));
				setReady(false);
			}
		}
		checkReady();
	}

	return (
		<>
			<Container>
				<Col {...containerCol}>
					<WidthImg src={require("../assets/images/loading.gif")} />
					<CaptionContainer>
						<Texty top={20} font={20}>
							분석중..
						</Texty>
					</CaptionContainer>
				</Col>
			</Container>
		</>
	);
};

export default Loading;
