var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/app/app.js'
	],
	output: {
		filename: "bundle.js",
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"},
			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.scss$/, loaders: ["style", "css", "sass"]}
		]
	},
	devServer: {
		inline: true,
		contentBase: './src',
		historyAPIFallback: true
	},
	plugins: [HTMLWebpackPluginConfig]
};