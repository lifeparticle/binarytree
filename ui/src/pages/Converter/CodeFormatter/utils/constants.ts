import beautify from "js-beautify";

const INDENTATION_LEVEL = [
	{
		value: "2",
		label: "2 space per indent level",
	},
	{
		value: "3",
		label: "3 space per indent level",
	},
	{
		value: "4",
		label: "4 space per indent level",
	},
];

const INPUT_TYPE = [
	{ label: "HTML", value: "html" },
	{ label: "CSS", value: "css" },
	{ label: "JSON", value: "json" },
	{ label: "JavaScript", value: "javascript" },
	{ label: "YAML", value: "yaml" },
];

const BEAUTIFY_FUNCTIONS: {
	[key: string]: (code: string, options: object) => string;
} = {
	html: beautify.html_beautify,
	css: beautify.css_beautify,
	default: beautify.js_beautify,
};

export { INDENTATION_LEVEL, INPUT_TYPE, BEAUTIFY_FUNCTIONS };
