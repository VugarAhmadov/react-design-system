var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var autoprefix = require("less-plugin-autoprefix");


module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-links'
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new MiniCssExtractPlugin({
          filename: '[name].css'
      })
    );
    config.module.rules.push(
      {
        test: /\.(css)$/,
        use: [
            "css-loader"
        ]
      },
      {
        test: /\.(less)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader"
            },
            {
                loader: "less-loader",
                options: {
                    plugins: [
                    //     new autoprefix({
                    //         remove: false,
                    //         browsers: [
                    //             "Chrome >= 52",
                    //             "FireFox >= 44",
                    //             "Safari >= 7",
                    //             "Explorer 11",
                    //             "last 4 Edge versions"
                    //         ]
                    //     })
                    ]
                }
            }

        ]
      }
    );
    return config;
  },
};
