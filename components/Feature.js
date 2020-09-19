import React from "react";
import { Row, Col, Progress } from "antd";

const Feature = ({ title, value, color }) => {
	return (
		<>
			<Row justify="center" style={{ margin: "5px 40px 5px 30px" }}>
				<Col
					xs={6}
					sm={6}
					md={3}
					lg={3}
					xl={3}
					style={{ textAlign: "center" }}
				>
					{title}
				</Col>
				<Col xs={18} sm={18} md={9} lg={9} xl={6}>
					<Progress
						strokeColor={color ? color : "#be2edd"}
						percent={value}
						showInfo={false}
					></Progress>
				</Col>
			</Row>
		</>
	);
};

export default Feature;
