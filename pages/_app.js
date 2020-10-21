import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config.js";

import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, store, pageProps }) => {
	return (
		<Provider store={store}>
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
			<Component {...pageProps}/>
		</Provider>
	);
};

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	store: PropTypes.object,
	pageProps: PropTypes.object,
};

App.getInitialProps = async (context) => {
	console.log(context);
	const { ctx, Component } = context;
	let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default withRedux((initialState) => {
  const middlewares = [];
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
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
