import { fileURLToPath } from 'node:url'
import webpack from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default (_env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    context: fileURLToPath(new URL('.', import.meta.url)),
    entry: './src/main.js',
    output: {
      path: fileURLToPath(new URL('./dist', import.meta.url)),
      filename: 'assets/[name].[contenthash].js',
      assetModuleFilename: 'assets/[name].[contenthash][ext]',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        vue: 'vue/dist/vue.runtime.esm-bundler.js',
      },
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: /\.module\.css$/,
                  namedExport: false,
                  exportLocalsConvention: 'as-is',
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|webp|gif|svg|ico)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: { maxSize: 4096 },
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
        scriptLoading: 'defer',
      }),
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
      ...(isProduction
        ? [new MiniCssExtractPlugin({ filename: 'assets/[name].[contenthash].css' })]
        : []),
    ],
    devtool: isProduction ? false : 'eval-source-map',
    devServer: {
      host: 'localhost',
      port: 5173,
      hot: true,
    },
  }
}
