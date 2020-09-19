import styled from "styled-components";

export const fullCol = { xs: 16, sm: 11, md: 9, lg: 7, xl: 5 };

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: #f66a70;
`;

export const WidthImg = styled.img`
	display: block;
	margin: 0;
	max-width: 100%;
	min-width: 100%;
	height: auto;
`;

export const HalfImg = styled.img`
	display: block;
	width: 50%;
	height: auto;
	transform: translateX(50%);

	margin-bottom: 10px;
`;

export const StartButton = styled.button`
	font-family: "Godo", Arial;
	text-align: center;

	background-color: #333;
	color: #fff;
	font-size: 30px;
	font-weight: 400;
	border: none;
	border-radius: 3px;
	cursor: pointer;

	display: block;
	width: 80%;
	height: 50px;
	transform: translateX(10%);

	margin-top: 20px;
`;
