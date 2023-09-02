interface Option {
	label: string;
	value: string;
}

interface SegmentComponentPropsType {
	value: string;
	onChange: (value: string | number) => void;
	options: Option[];
}

export type { SegmentComponentPropsType };
