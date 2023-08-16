import { FormatType } from "./types";

const determineFormat = (input: string): FormatType => {
	const formats: Record<string, FormatType> = {
		"#": "hex",
		rgba: "rgba",
		rgb: "rgb",
		hsla: "hsla",
		hsl: "hsl",
	};
	for (const key in formats) {
		if (input.startsWith(key)) return formats[key];
	}
	return "hex";
};

export { determineFormat };
