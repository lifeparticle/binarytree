interface Option {
	value: string;
	label: string;
}

interface SelectComponentPropsType {
	label?: string;
	value?: string;
	defaultActiveFirstOption?: boolean;
	onSelect?: (value: string, option: Option) => void;
	options: Option[];
}

export type { SelectComponentPropsType };
