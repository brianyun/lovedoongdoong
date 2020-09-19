const webpack = require("webpack");
const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
	withImages({
		webpack(config, options) {
			return config;
		},
		assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
	})
);
