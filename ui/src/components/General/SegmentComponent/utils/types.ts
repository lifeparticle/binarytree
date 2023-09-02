interface Option {
	label: string;
	value: string;
}

interface SegmentComponentPropsType {
	label?: string;
	value: string;
	onChange: (value: string | number) => void;
	options: Option[];
}

export type { SegmentComponentPropsType };
