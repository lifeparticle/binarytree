import { FormatType } from "./type";

const formatLabels = ["HEX", "RGB", "RGBA", "HSL", "HSLA"] as const;

const DATA_OPTIONS = formatLabels.map((label) => ({
	value: label.toLowerCase() as FormatType,
	label,
}));

const INITIAL_COLOR = "#ffffff";
const INITIAL_FORMAT = DATA_OPTIONS[0].value;

export { formatLabels, INITIAL_COLOR, INITIAL_FORMAT, DATA_OPTIONS };
