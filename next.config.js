const webpack = require('webpack');
const path = require("path");
require('dotenv').config();

module.exports = {
  webpack(config) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["pages"] = path.join(__dirname, "pages");
    config.resolve.alias["static"] = path.join(__dirname, "public");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
  }, {});
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
};
