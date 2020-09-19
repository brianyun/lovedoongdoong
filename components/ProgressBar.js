import React from "react";
import styled from "styled-components";
import { Progress } from "antd";

const ProgressBar = ({ i, length }) => {
	return (
		<>
			<ProgressContainer>
				<h5>
					{i}/{length}
				</h5>
				<Progress
					strokeColor="#f66a70"
					percent={(i / length) * 100}
					showInfo={false}
				></Progress>
			</ProgressContainer>
		</>
	);
};

const ProgressContainer = styled.div`
	margin-top: 50px;
`;

export default ProgressBar;
