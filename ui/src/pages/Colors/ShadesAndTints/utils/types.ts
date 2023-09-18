import { ChangeEvent } from "react";

interface SelectOption {
	value: string;
	label: string;
	func?: (shades: string[]) => string;
}

interface ColorsProps {
	colors: string[];
}

interface ColorInputsProps {
	color: string;
	handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handlePercentageChange: (value: number | null) => void;
	setColor: (color: string) => void;
	percentage: number;
	handleOutputFormatChange: (option: SelectOption) => void;
	option: SelectOption;
	shades: string[];
	tints: string[];
}

interface ExtendedColorsProps extends ColorsProps {
	isPending: boolean;
	type: string;
}

export type {
	SelectOption,
	ColorsProps,
	ColorInputsProps,
	ExtendedColorsProps,
};
