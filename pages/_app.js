import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config.js";

import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";

import { createGlobalStyle } from "styled-components";

const App = ({ Component }) => {
	return (
		<>
			<NextSeo {...SEO} />
			<Head>
				<meta charSet="utf-8" />
				<title>나와 찰떡궁합인 반려동물은?</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
				/>
			</Head>
			<GlobalStyle />
			<Component />
		</>
	);
};

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	store: PropTypes.object,
};

export default withRedux((initialState, options) => {
	const store = createStore(reducer, initialState);
	return store;
})(App);

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Godo';
	src: url('/fonts/GodoB.ttf');
	src: url('/fonts/GodoM.ttf');
	font-display: swap;
}

@font-face {
	font-family: 'NanumPen';
	src: url('/fonts/NanumPen.ttf');
	font-display: swap;
}

@font-face {
	font-family: 'NanumSquareRound';
	src: url('/fonts/NanumSquareRoundB.ttf');
	src: url('/fonts/NanumSquareRoundEB.ttf');
	src: url('/fonts/NanumSquareRoundL.ttf');
	src: url('/fonts/NanumSquareRoundR.ttf');
	font-display: swap;
}
`;
