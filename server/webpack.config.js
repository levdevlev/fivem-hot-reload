const path = require("path");

module.exports = {
  mode: "production",
  context: __dirname,
  entry: `./src/server.ts`,
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: `server.js`,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  target: "node",
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }],
  },
  externals: {
    fsevents: 'fsevents'
  }
};
