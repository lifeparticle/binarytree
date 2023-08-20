import { FormatType } from "./types";

const FORMAT_LABELS = ["HEX", "RGB", "RGBA", "HSL", "HSLA"] as const;

const EXTENDED_FORMAT_LABELS = [
	...FORMAT_LABELS.slice(0, 1),
	"HEX8",
	...FORMAT_LABELS.slice(1),
] as const;

const FORMAT_VALUES = {
	hex: "",
	hex8: "",
	rgb: "",
	rgba: "",
	hsl: "",
	hsla: "",
};

const DATA_OPTIONS = FORMAT_LABELS.map((label) => ({
	value: label.toLowerCase() as FormatType,
	label,
}));

const EXTENDED_DATA_OPTIONS = EXTENDED_FORMAT_LABELS.map((label) => ({
	value: label.toLowerCase() as FormatType,
	label,
}));

const INITIAL_COLOR = "#ffffff";
const INITIAL_FORMAT = DATA_OPTIONS[0].value;

export {
	FORMAT_LABELS,
	FORMAT_VALUES,
	EXTENDED_FORMAT_LABELS,
	INITIAL_COLOR,
	INITIAL_FORMAT,
	DATA_OPTIONS,
	EXTENDED_DATA_OPTIONS,
};
