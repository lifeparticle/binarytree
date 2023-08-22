const DEFAULT_COLOR = "#ffffff";
const DEFAULT_NUM_SHADES = 10;
const MAX_SHADES = 256;
const MIN_SHADES = 0;

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
};
