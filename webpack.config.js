const isDebug = !process.argv.includes("--release");
const keysTransformer = require('ts-transformer-keys/transformer').default;

module.exports = {
	target: "async-node",
	node: {},
	externals: {
		"socket.io-client": "socket.io-client",
		"axios": "axios"
	},
	mode: isDebug ? "development" : "production",

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".js", ".json"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.ts?$/,
				loader: "awesome-typescript-loader",
				options: {
					getCustomTransformers:
						program => ({
								before: [
										keysTransformer(program)
								]
						})
				}
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		],
	},

	entry: "./src/index.ts",
	output: {
		libraryTarget: "this",
		filename: "index.js",
		path: __dirname + "/dist/"
	},
	cache: true
};
