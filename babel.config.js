module.exports = {
	presets: [
		['@babel/preset-env', {targets: {node: 'current'}}],
        
		//в доке jestjs.io вкладка typescript
		'@babel/preset-typescript',
		//storybook 7.0.4 migrations		
		// {
		// 	"onlyRemoveTypeImports": true,
		// 	"allExtensions": true,
		// 	"isTSX": true
		// },
		[
			'@babel/preset-react', {'runtime': 'automatic'}
		]
	],
};