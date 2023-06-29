import type webpack  from "webpack";
import type { BuildOptions } from "./types/config";
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

	return [
		typescriptLoader,
		cssLoader,
		svgLoader,
		fileLoader
	]
}