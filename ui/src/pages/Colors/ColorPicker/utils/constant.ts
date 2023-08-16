import { FormatType } from "./types";

const formatLabels = ["HEX", "RGB", "RGBA", "HSL", "HSLA"] as const;

const extendedFormatLabels = [
	...formatLabels.slice(0, 1),
	"HEX8",
	...formatLabels.slice(1),
] as const;

const DATA_OPTIONS = formatLabels.map((label) => ({
	value: label.toLowerCase() as FormatType,
	label,
}));

const EXTENDED_DATA_OPTIONS = extendedFormatLabels.map((label) => ({
	value: label.toLowerCase() as FormatType,
	label,
}));

const INITIAL_COLOR = "#ffffff";
const INITIAL_FORMAT = DATA_OPTIONS[0].value;

export {
	formatLabels,
	extendedFormatLabels,
	INITIAL_COLOR,
	INITIAL_FORMAT,
	DATA_OPTIONS,
	EXTENDED_DATA_OPTIONS,
};
