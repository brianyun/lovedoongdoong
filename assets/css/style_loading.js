import styled from "styled-components";

export const WidthImg = styled.img`
	display: block;
	margin: 0;
	max-width: 100%;
	min-width: 100%;
	height: auto;
`;

export const Texty = styled.p`
	font-family: "NanumSquareRound", "Godo", Arial;

	text-align: center;
	display: block;
	margin-top: ${(props) => (props.top ? props.top : 0)}px;
	margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
	font-size: ${(props) => (props.font ? props.font : 0)}px;
	color: ${(props) => (props.color ? props.color : "#000000")};
`;

export const CaptionContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
`;
