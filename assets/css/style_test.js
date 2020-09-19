import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
`;

export const RowsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

export const IconContainer = styled.img`
	width: 100%;
	height: 100px;
	object-fit: contain;
	display: flex;
	align-items: center;
`;

export const OptionBtn = styled.button`
	font-family: "NanumSquareRound", "Godo", Arial;
	background: #eeeeee !important;
	color: #000000 !important;
	border: none;
	border-radius: 3px;
	display: block;
	width: ${(props) => (props.isHalf ? 45 : 100)}%;
	cursor: pointer;
	font-size: 25px;
	margin-bottom: 20px;

	@media (hover: hover) and (pointer: fine) {
		&:hover {
			background: #f66a70 !important;
			color: #ffffff !important;
		}
		&:active {
			background: #eeeeee;
			color: #000000;
		}
	}
`;
