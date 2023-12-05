import { EXTENDED_DATA_OPTIONS } from "./constants";
import tinycolor from "tinycolor2";
import { FormatType, colors } from "./types";

export const calculateColors = (color: string) => {
	const tc = tinycolor(color);
	const { r, g, b, a } = tc.toRgb();
	const hsl = tc.toHsl();
	const alpha = tc.getAlpha();

	return {
		hex: tc.toHexString(),
		hex8: tc.toHex8String(),
		rgb: tc.toRgbString(),
		rgba: `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(
			b
		)}, ${a})`,
		hsl: tc.toHslString(),
		hsla: `hsla(${Math.round(hsl.h)}, ${Math.round(
			hsl.s * 100
		)}%, ${Math.round(hsl.l * 100)}%, ${alpha})`,
	};
};

export const determineFormat = (input: string): FormatType => {
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

export const determineLabel = (
	optionValue: string,
	optionLabel: string,
	displayType: string
) => {
	switch (displayType) {
		case "variables":
			return `--color-${optionValue}`;
		case "use-variables":
			return "background-color";
		default:
			return optionLabel;
	}
};

export const determineValue = (
	optionValue: string,
	displayType: string,
	colors: colors
) => {
	return displayType === "use-variables"
		? `var(--color-${optionValue})`
		: colors[optionValue];
};

export const generateClipboardText = (displayType: string, colors: colors) => {
	switch (displayType) {
		case "variables":
			return EXTENDED_DATA_OPTIONS.map(
				(option) => `--color-${option.value}: ${colors[option.value]};`
			).join("\n");

		case "use-variables":
			return EXTENDED_DATA_OPTIONS.map(
				(option) => `var(--color-${option.value})`
			).join("\n");

		default:
			return Object.values(colors).join("\n");
	}
};
