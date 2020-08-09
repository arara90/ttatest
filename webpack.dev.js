const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: { index: ['./frontend/index.js'] },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-react',
                                ["@babel/preset-env", {
                  
                                }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'), //
        index: 'index.html',
        stats: {
            colors: true
        },
        hot: true,
        port: 53384,
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './test.html',
            filename: 'index.html'
        }),

    ]
  }

