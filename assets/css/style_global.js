import styled from "styled-components";

export const containerCol = { xs: 24, sm: 11, md: 9, lg: 7, xl: 6 };

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: ${(props) => (props.top ? props.top : 100)}px;
`;
