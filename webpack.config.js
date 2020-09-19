module.exports = {
	webpackConfig: {
		module: {
			rules: [
				// Babel loader, will use your project’s .babelrc
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
				},
				// Other loaders that are needed for your components
				{
					test: /\.css$/,
					loader: "style-loader!css-loader",
				},

				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: "file-loader",
						},
					],
				},
			],
		},
	},
};
