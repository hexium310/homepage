const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsconfigFile = process.env.NODE_ENV === 'production' ? 'tsconfig.production.json' : 'tsconfig.json';

exports.resolvableExtensions = () => [".ts", ".tsx", ".js", ".jsx"];

exports.onCreateWebpackConfig = ({
  loaders,
  actions: {
    setWebpackConfig,
  },
}) => {
  setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            loaders.js(),
            {
              loader: 'ts-loader',
              options: {
                configFile: tsconfigFile,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      plugins: [
        new TsconfigPathsPlugin(),
      ],
    },
  });
};
