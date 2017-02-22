import path from 'path';


const devtool = 'inline-source-map';
const entry = [
	'webpack-dev-server/client?http://localhost:8080',
	path.join(__dirname, 'src/index'),
];
const output = {
	path: path.resolve(__dirname, 'src'),
	filename: 'bundle.js',
	publicPath: '/',
};
const devServer = {
	contentBase: path.resolve(__dirname, 'src'),
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false,
	},
};
const scriptLoader = {
	loader: 'babel-loader',
	include: path.resolve(__dirname, 'src'),
	exclude: /node_modules/,
	test: /\.js$/,
};
const resolve = {
	extensions: ['.js'],
};


export default {
	devtool,
	entry,
	output,
	devServer,
	module: {
		loaders: [
			scriptLoader,
		],
	},
	resolve,
};
