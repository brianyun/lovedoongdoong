import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FacebookProvider, Share } from "react-facebook";
import { RowsContainer, ActionBtn, IconBtn } from "../assets/css/style_result";
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
						mobileWebUrl: "https://lovedoongdoong.com",
						webUrl: "https://lovedoongdoong.com",
					},
				},
				buttons: [
					{
						title: "나도 해볼래요",
						link: {
							mobileWebUrl: "https://lovedoongdoong.com",
							webUrl: "https://lovedoongdoong.com",
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
					<Share href="http://lovedoongdoong.com">
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
