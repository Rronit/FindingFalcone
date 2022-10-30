const path = require("path");

//this file returns the basename of a file (such that require('logo.jpg'); returns 'logo'), which is used by Jest to handle static assets such as images and stylesheets. For more details: https://jestjs.io/docs/en/webpack
module.exports = {
  process(src, filename, config, options) {
    return "module.exports = " + JSON.stringify(path.basename(filename)) + ";";
  }
};
