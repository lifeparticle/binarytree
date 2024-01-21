module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "/public/tinymce"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"max-params": ["error", 7],
		"max-lines": ["warn", 100],
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaFeatures: {
			jsx: false,
		},
	},
};
