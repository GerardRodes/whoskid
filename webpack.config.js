var HTMLWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
})
var ETP = require("extract-text-webpack-plugin")

module.exports = {
	entry: {
		main: __dirname + '/app/index.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ETP.extract("style-loader","css-loader?minimize")
			},
			{
				test: /\.scss$/,
				loader: ETP.extract("style-loader", "css-loader?minimize!sass-loader")
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/build'
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
		HTMLWebpackPluginConfig,
		new ETP("style.css",{allChunks: true})
	]
}