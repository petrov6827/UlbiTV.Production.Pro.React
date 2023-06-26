import webpack  from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const typescriptLoader = {
		test: /\.tsx?$/,
		loader: 'ts-loader',
		exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	// const babelLoader = buildBabelLoader(options);
	const cssLoader = buildCssLoader(isDev);

	// const cssLoader = {
	// 	test: /\.s[ac]ss$/i,
	// 	use: [
	// 		// Creates `style` nodes from JS strings
	// 		isDev ? "style-loader"  : MiniCssExtractPlugin.loader,
	// 		{
	// 			loader: "css-loader",
	// 			options: {
	// 				modules: {
	// 					auto: (resPath: string) => Boolean(resPath.includes('.module.')),
	// 					localIdentName: isDev 
	// 						? '[path][name]__[local]--[hash:base64:5]' 
	// 						: '[hash:base64:8]' 
	// 				},
	// 			},
	// 		},
	// 		// Translates CSS into CommonJS
	// 		// "css-loader",
	// 		// Compiles Sass to CSS
	// 		"sass-loader",
	// 	],
	// }

	return [
		typescriptLoader,
		cssLoader,
		svgLoader,
		fileLoader
	]
}