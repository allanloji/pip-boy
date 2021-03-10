const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["pages"] = path.join(__dirname, "pages");
    config.resolve.alias["static"] = path.join(__dirname, "public");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");
    return config;
  },
};
