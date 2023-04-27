const path = require("path");
const { NextConfig } = require("next");

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,

    webpack(config, options) {
      const { dev, isServer } = options;

      // ? replace your directories

      const includedDirs = [path.resolve(__dirname, "src")];
      config.module = config.module || {};
      config.module.rules = config.module.rules || [];
      config.module.rules.push({
        test: /\.(tsx|jsx|ts|js)$/,
        // ? add your directories here
        include: includedDirs,
        use: [
          options.defaultLoaders.babel,
          {
            loader: "babel-loader",
            options: {
              sourceMaps: dev,
              plugins: [
                require.resolve("babel-plugin-macros"),
                [
                  require.resolve("babel-plugin-styled-components"),
                  { ssr: true, displayName: true },
                ],
                [
                  require.resolve("@babel/plugin-syntax-typescript"),
                  { isTSX: true },
                ],
              ],
            },
          },
        ],
      });
      if (!isServer) {
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        };
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      } else {
        return config;
      }
    },
  };
};
