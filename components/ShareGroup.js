import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FacebookProvider, Share } from "react-facebook";
import {
	RowsContainer,
	Texty,
	ActionBtn,
	IconBtn,
} from "../assets/css/style_result";
import { CLEAR_URLS } from "../reducers/answer";
import icons from "../back/icon_result";

function ShareGroup({ title, thumbUrl }) {
	const dispatch = useDispatch();
	const router = useRouter();

	const toKakao = () => {
		try {
			Kakao.Link.sendDefault({
				objectType: "feed",
				content: {
					title: "나와 찰떡궁합인 반려동물",
					description: title,
					imageUrl: thumbUrl,
					link: {
						mobileWebUrl: "https://mbti-bf18c.web.app/",
						webUrl: "https://mbti-bf18c.web.app/",
					},
				},
				buttons: [
					{
						title: "나도 해볼래요",
						link: {
							mobileWebUrl: "https://mbti-bf18c.web.app/",
							webUrl: "https://mbti-bf18c.web.app/",
						},
					},
				],
			});
		} catch (err) {
			// console.log(err);
		}
	};

	useEffect(() => {
		try {
			Kakao.init("a5394119fa694f305316c59293958f9d");
		} catch (err) {
			// console.log(err);
		}
	}, []);

	const toTop = () => {
		dispatch({ type: CLEAR_URLS });
		router.push("/");
	};

	const toRandom = () => {
		dispatch({ type: CLEAR_URLS });
		const types = [
			"alpaca",
			"chihuahua",
			"cow",
			"crab",
			"deoksun",
			"dinosaur",
			"fish",
			"giraffe",
			"gorilla",
			"hamster",
			"hedgehog",
			"husky",
			"koala",
			"llama",
			"malteeze",
			"meerkat",
			"panda",
			"parrot",
			"persian",
			"polar",
			"pomenarian",
			"poodle",
			"quokka",
			"rabbit",
			"retriever",
			"shorthair",
			"sloth",
			"squirrel",
			"turtle",
			"unicorn",
			"welsh",
			"woodpecker",
		];
		const randomType = types[1 + Math.floor(Math.random() * 32)];
		router.push("/result/".concat(randomType));
	};

	return (
		<>
			<RowsContainer>
				<ActionBtn onClick={toTop} style={{ marginLeft: "20px" }}>
					다시 해보기
				</ActionBtn>

				<IconBtn onClick={toKakao}>
					<img src={icons["kakao"]} style={{ width: "50px" }} />
				</IconBtn>

				<FacebookProvider appId="3621305641226627">
					<Share href="http://www.facebook.com">
						{({ handleClick }) => (
							<IconBtn onClick={handleClick}>
								<img
									src={icons["facebook"]}
									style={{
										width: "50px",
									}}
								/>
							</IconBtn>
						)}
					</Share>
				</FacebookProvider>
			</RowsContainer>
		</>
	);
}

export default ShareGroup;
