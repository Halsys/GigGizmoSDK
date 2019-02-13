const isDebug = !process.argv.includes("--release");

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
      { test: /\.ts?$/, loader: "ts-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ],
  },

  entry: "./index.ts",
  output: {
    libraryTarget: "this",
    filename: "index.js",
    path: __dirname + "/"
  },
  externals: {
    "socket.io-client": "socket.io-client",
    axios: "axios"
  }
};
