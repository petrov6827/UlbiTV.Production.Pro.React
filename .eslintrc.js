module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:i18next/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"react", 
		"@typescript-eslint", 
		"i18next", 
		"react-hooks"
	],
	// "ignorePatterns": ["**.stories.tsx"],
	overrides: [
		{
			files: ["**.stories.tsx"],
			rules: {
				'max-len': 'off'
			}
		}
	],
	rules: {
		indent: ['error', 'tab'],
		"no-tabs": 0,
		// indent: [1, 4],
		"react/jsx-filename-extension": [2, 
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/display-name": "off",
		"react/jsx-props-no-spreading": "off",
		"@typescript-eslint/ban-ts-comment": "warn",
		"react/function-component-definition": "off",
		"no-shadow": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"no-underscore-dangle": "off",
		"react-hooks/rules-of-hooks": "error", //правила хуков
		"react-hooks/exhaustive-deps": "error", // зависимости эффектов
		"no-multiple-empty-lines": ["error", { "max": 1 }],
		// "no-trailing-spaces": ["error", { "skipBlankLines": true }],
		"i18next/no-literal-string": [
			"off",
			{
				markupOnly: true,
				ignoreAttribute: ["data-testid", "to"],
			},
		],
		"max-len": ["error", { ignoreComments: true, code: 110 }],
		"arrow-body-style": ["error", "as-needed"],
		"no-param-reassign": "off",
		//определяет, является ли импортируемый модуль типом или нет, 
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				"prefer": "type-imports",
			}
		],

	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true
	},
	settings: {
		react: {
			version: "detect"
		}
	},
	
}
