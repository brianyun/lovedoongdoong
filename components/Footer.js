import React from "react";
import {
	WidthImg,
	Texty,
	FooterContainer,
	RowsContainer,
} from "../assets/css/style_result";
import icons from "../back/icon_result";

function Footer() {
	return (
		<>
			<FooterContainer>
				<img
					src={icons["logo"]}
					style={{
						marginTop: "30px",
						width: "66%",
					}}
				/>

				<Texty top={15} font={20}>
					귀여움이 세상을 구한다!
				</Texty>

				<Texty top={0} font={15}>
					라는 슬로건으로 러브둥둥 채널을 운영하며, <br /> 귀여운 모든
					것을 만화로 표현하고 있습니다.
				</Texty>

				<Texty top={30} font={12}>
					현재 NC 소프트의 버프툰에서 연재중이며, <br /> 「힝구의
					견생일기」, 「전 덕순인데요..」 등 여러 IP 시리즈를 보유하고
					있습니다.
				</Texty>
				<Texty top={15} font={12} bottom={30}>
					캐릭터 제작부터 웹툰, 애니메이션 제작까지 전반적인
					프로세스가 구축되어 있으니 <br /> 협업을 원하시는 분들은
					love@bigpicture.team 으로 문의 주세요!
				</Texty>

				<RowsContainer
					style={{ marginBottom: "60px", paddingBottom: "30px" }}
				>
					<a href="https://www.instagram.com/love_doong.doong/">
						<img
							src={icons["instagram"]}
							style={{ width: "50px" }}
						/>
					</a>
					<a href="https://www.facebook.com/lovedoong2">
						<img
							src={icons["facebook"]}
							style={{ width: "50px", marginLeft: "20px" }}
						/>
					</a>
					<a href="https://www.youtube.com/channel/UCszFjh7CEfwDb7UUGb4RzCQ">
						<img
							src={icons["youtube"]}
							style={{
								width: "50px",
								transform: "translateY(25%)",
								marginLeft: "20px",
							}}
						/>
					</a>
				</RowsContainer>

				<WidthImg src={icons["line_horizontal"]} />

				<div
					style={{
						width: "100%",
						alignItems: "left",
						paddingLeft: "20px",
					}}
				>
					<Texty
						top={30}
						font={20}
						style={{ textAlign: "left", fontWeight: "bold" }}
					>
						함께 만든 사람들
					</Texty>
					<Texty top={20} font={15} style={{ textAlign: "left" }}>
						기획 _ 러브둥둥 &nbsp;
						<a mailto="love@bigpicture.team">
							love@bigpicture.team
						</a>
					</Texty>
					<Texty font={15} style={{ textAlign: "left" }}>
						기획 _ 오지현 &nbsp;
						<a mailto="jeehyeon__@naver.com">
							jeehyeon__@naver.com
						</a>
					</Texty>
					<Texty font={15} style={{ textAlign: "left" }}>
						개발 _ 윤희상 &nbsp;
						<a mailto="huisang.growth@gmail.com">
							huisang.growth@gmail.com
						</a>
					</Texty>
				</div>

				<Texty top={30} font={10} color={"dddddd"}>
					©BIGPICTURE TEAM
				</Texty>
			</FooterContainer>

			<div
				style={{
					width: "50px",
					backgroundColor: "#33333",
					height: "120px",
				}}
			></div>
		</>
	);
}

export default Footer;
