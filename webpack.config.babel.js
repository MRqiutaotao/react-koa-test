import webpack from "webpack"
import path from "path"
import HtmlwebpackPlugin from "html-webpack-plugin"
import CleanPlugin from "clean-webpack-plugin"
import HappyPack  from "happypack";
import os from "os";
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

import MiniCssExtractPlugin from "mini-css-extract-plugin";

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./static/src/index.js")
    },
    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, "./static/dist/"),
        filename: "[name].bundle.js" 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
				loader: 'happypack/loader?id=happybabel&cacheDirectory=true'
            },
            {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
			{
				test: /\.less$/,
				use:  [
					MiniCssExtractPlugin.loader,
					"css-loader", 'less-loader'
				  ] 
            },
            // {
			// 	test: /\.css$/,
			// 	use: ["css-loader"]
			// },
			// {
			// 	test: /\.less$/,
			// 	use:  [
			// 		"css-loader", 'less-loader'
			// 	  ] 
			// },
			{
				test:/\.(png|jpg)$/,
				loader:'url-loader?limit=10000&name=[path][name].[ext]'
			}

        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: path.resolve(__dirname, "./views/index.html"),
            template: path.resolve(__dirname, "./template/index.html"),
            inject: true,
            hash: false
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: path.join(__dirname, 'manifest.json')
        }),
        new HappyPack({
			id: 'happybabel',
			loaders: ['babel-loader'],
			threadPool: happyThreadPool,
			verbose: true
		}),
		new MiniCssExtractPlugin({
			filename: "style/[name].css",
			chunkFilename: "[id].css"
        }),
        new CleanPlugin(path.resolve(__dirname,"./static/dist"))
    ]
}