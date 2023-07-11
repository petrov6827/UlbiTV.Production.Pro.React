module.exports = {
	presets: [
		['@babel/preset-env', {targets: {node: 'current'}}],
        
		//в доке jestjs.io вкладка typescript
		'@babel/preset-typescript',
		['@babel/preset-react', {
			'runtime': 'automatic'
		}]
	],
};