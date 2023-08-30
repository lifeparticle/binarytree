import { FORMAT_LABELS } from "./constants";

type FormatType = Lowercase<(typeof FORMAT_LABELS)[number]>;

type colors = {
	[key: string]: string;
};

interface DisplayColorsProps {
	colors: colors;
	format: string;
	displayType: "variables" | "colors" | "use-variables";
	title: string;
}

interface DisplayColorProps {
	customLabel: string;
	label: string;
	customValue: string;
	value: string;
	format: string;
}

export type { FormatType, DisplayColorsProps, DisplayColorProps, colors };
