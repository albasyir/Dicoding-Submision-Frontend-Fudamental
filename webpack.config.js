const path = require("path");

module.exports = {
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		hot: true,
		port: 8081,
		after: function (app, server, compiler) {
			console.log(app, server, compiler);
		},
	},
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),
	module: {
		rules: [
			{
				use: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js"],
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
};
