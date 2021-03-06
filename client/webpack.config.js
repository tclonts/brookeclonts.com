var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: ["babel-polyfill", './src/index.js'], // entry point of our application
    output: {
        filename: 'bundle.js', // the name of the bundled file
        // path of the bundled file
        path: path.resolve(__dirname, 'dist')
    },
    module: { // rules for bundling our files
        rules: [
            {
                test: /.js$/, // what to look for
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           title: 'Async Await With React',
           template: './src/index.js',
        })
    ]
}