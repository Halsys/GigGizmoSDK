const isDebug = !process.argv.includes("--release");

const baseConfig = {
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
      { test: /\.ts?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};

const clientConfig = {
  ...baseConfig,
  entry: "./src/client/index.ts",
  target: "web",
  output: {
    libraryTarget: "this",
    filename: "bundle.client.js",
    path: __dirname + "/dist"
  },
  externals: {
    child_process: "child_process",
    fs: "fs"
  }
};

const serverConfig = {
  ...baseConfig,
  entry: "./src/server/index.ts",
  target: "node",
  output: {
    libraryTarget: "this",
    filename: "bundle.server.js",
    path: __dirname + "/dist"
  }
};

const libConfig = {
  ...baseConfig,
  entry: "./src/index.ts",
  target: "node",
  output: {
    libraryTarget: "this",
    filename: "bundle.js",
    path: __dirname + "/dist"
  }
};

module.exports = [clientConfig, serverConfig, libConfig];
