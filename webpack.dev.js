/* eslint-disable prettier/prettier */
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const {EnvironmentPlugin, ProvidePlugin} = require("webpack")


module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Imalipay",
    projectName: "auth",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new ProvidePlugin({
        process: 'process/browser',
      }),
      new EnvironmentPlugin({
        BASE_URL:"https://api.imalipay.com"
      }),
    ],
    devServer: {
      port: 8084,
    },
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
