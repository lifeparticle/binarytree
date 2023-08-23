import { ReactNode } from "react";

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

export type { InputComponentPropsType };
