const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const deps = require('./package.json').dependencies
module.exports = {
    mode,
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:3000/',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            shared: {
                ...deps,
                name: 'host',
                remotes: {},
                exposes: {},
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
    ],
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      contentBase: './build',
      port: 3000,
    },
}
