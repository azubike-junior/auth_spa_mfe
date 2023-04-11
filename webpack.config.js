/* eslint-disable prettier/prettier */
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Imalipay",
    projectName: "auth",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        { test: /\.xlsx$/, loader: "webpack-xlsx-loader" },
      ],
    },
    // externals: ["react", "react-dom", /^@Imalipay\/.+/]
    // modify the webpack config however you'd like to by adding to this object
  });
};

 // "dev": "webpack serve --env standalone",

