const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env) => {
	const isRelease = (env === 'RELEASE');
	return {
		mode: isRelease ? 'production' : 'development',
		devtool: true ? 'source-map' : 'cheap-module-source-map',
		entry: {
			FirstComponent: './wwwroot/js/FirstComponent.js'
		},
		output: {
			path: `${__dirname}/wwwroot/dist/`,
			filename: '[name].js'
		},
		resolve: {
			extensions: ['.js', '.vue']
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: 'vue-loader',
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {}]
						]
					}
				},
				{
					test: /\.css$/,
					use: ['vue-style-loader', {
						loader: 'css-loader',
						options: {
							esModule: false
						}
					}]
				}
			]
		},
		externals: {
			vue: 'Vue'
		},
		plugins: [new VueLoaderPlugin()]
	};
};
