interface SelectOption {
	value: string;
	label: string;
	func?: (shades: string[]) => string;
}

export type { SelectOption };
