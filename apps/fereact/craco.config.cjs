/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const absolutePath = path.join(__dirname, "../core");

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat[absolutePath];
      }

      // @see https://github.com/facebook/create-react-app/issues/12177
      // remove postcss
      webpackConfig.module.rules[1].oneOf.map((e) => {
        if (e.use != null) {
          e.use = e.use.filter((e) => e?.options?.postcssOptions == null);
        }
        return e;
      });
      return webpackConfig;
    },
  },
};
