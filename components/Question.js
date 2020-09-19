import React from "react";
import list from "../assets/list.json";
import {
	RowsContainer,
	IconContainer,
	OptionBtn,
} from "../assets/css/style_test";
import { Texty } from "../assets/css/style_result";
import icons from "../back/icon_test";

const Question = ({ index, handler }) => {
	const q = list.arr;

	const click = (ans) => {
		if (document) {
			const list = document.getElementsByClassName("btn");
			list[ans - 1].blur();
		}
		handler(ans);
	};

	const font = 25;

	return (
		<>
			<div>
				<Texty
					font={font}
					style={{ fontFamily: "Godo", fontWeight: "bold" }}
				>
					Q. {q[index - 1].id}
				</Texty>
			</div>

			<div>
				<Texty top={20} font={font}>
					{q[index - 1].q}
				</Texty>
			</div>
			<div style={{ height: "25px" }}></div>

			{q[index - 1].icon && (
				<IconContainer src={icons[q[index - 1].icon]} alt="dd" />
			)}

			<div style={{ height: "25px" }}></div>

			{q[index - 1].a3 ? (
				<>
					<OptionBtn className="btn" onClick={() => click(1)}>
						{q[index - 1].a1}
					</OptionBtn>

					<OptionBtn className="btn" onClick={() => click(2)}>
						{q[index - 1].a2}
					</OptionBtn>

					<OptionBtn className="btn" onClick={() => click(3)}>
						{q[index - 1].a3}
					</OptionBtn>
				</>
			) : (
				<>
					<RowsContainer>
						<OptionBtn
							className="btn"
							isHalf={true}
							onClick={() => click(1)}
						>
							{q[index - 1].a1}
						</OptionBtn>

						<OptionBtn
							className="btn"
							isHalf={true}
							onClick={() => click(2)}
						>
							{q[index - 1].a2}
						</OptionBtn>
					</RowsContainer>
				</>
			)}

			{q[index - 1].a4 ? (
				<>
					<OptionBtn className="btn" onClick={() => click(4)}>
						{q[index - 1].a4}
					</OptionBtn>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default Question;

{
	/* <IconContainer src={icons[q[index - 1].icon]} alt="" /> */
}

// src={`/images/test/${q[index - 1].icon}.png`}
