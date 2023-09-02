const DEFAULT_COLOR = "#559D81";
const DEFAULT_NUM_SHADES = 10;
const MAX_SHADES = 100;
const MIN_SHADES = 0;

const SEGMENTED_OPTIONS = [
	{ label: "Shades", value: "Shades" },
	{ label: "Tints", value: "Tints" },
	{ label: "All", value: "All" },
];

const OUTPUT_FORMAT = [
	{
		value: "\n",
		label: "Separate results by new lines",
	},
	{
		value: ",",
		label: "Separate results by line commas",
	},
	{
		value: " ",
		label: "Separate results by line spaces",
	},
	{
		value: "commaString",
		label: "Separate results by commas with strings",
		func: (shades: string[]) =>
			shades.map((shade) => `'${shade}'`).join(", "),
	},
];

export {
	DEFAULT_COLOR,
	DEFAULT_NUM_SHADES,
	MAX_SHADES,
	MIN_SHADES,
	OUTPUT_FORMAT,
	SEGMENTED_OPTIONS,
};
