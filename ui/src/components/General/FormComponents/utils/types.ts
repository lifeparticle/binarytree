import { ReactNode } from "react";
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

interface SegmentComponentPropsType {
	label?: string;
	value: string;
	onChange: (value: string | number) => void;
	options: Option[];
}

type NumberType = {
	type: "number";
	value: number;
	onChange: (value: number | null) => void;
};

type TextType = {
	type: "text";
	value: string;
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputComponentPropsType = {
	label: string;
	precision?: number;
	min?: number;
	max?: number;
	step?: number;
	tooltip?: string;
	placeholder?: string;
	addonBefore?: ReactNode;
	addonAfter?: ReactNode;
	style?: React.CSSProperties;
} & (NumberType | TextType);

interface ButtonPropsType {
	children?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	icon?: React.ReactNode;
	type?: "link" | "text" | "default" | "dashed" | "primary" | undefined;
}

export type {
	SegmentComponentPropsType,
	SelectComponentPropsType,
	InputComponentPropsType,
	ButtonPropsType,
};
