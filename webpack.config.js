const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle_[hash].js",
        path: __dirname + "/build/",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".js"]
    },

    module: {
        loaders: [
            {
                // Ask webpack to check: If this file ends with .js, then apply some transforms
                test: /\.js$/,
                // Transform it with babel
                loader: 'babel',
                // don't transform node_modules folder (which don't need to be compiled)
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
        ],


    },
    vue: {
        loaders: {
            js: 'babel',
            css: 'style!css!autoprefixer',
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
        })
    ],

    externals: {
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    }
};