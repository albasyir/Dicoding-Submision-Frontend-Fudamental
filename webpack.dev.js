const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		hot: true,
		port: 8081,
	},
	mode: "development",
});
