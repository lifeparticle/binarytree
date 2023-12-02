import { Input, InputNumber } from "antd";
import React, { FC, ReactNode } from "react";
import { withLabelSize } from "components/Hoc";

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

type InputComponentProps = {
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

const ResponsiveInput: FC<InputComponentProps> = (props) => {
	return props.type === "number" ? (
		<InputNumber style={{ width: "100%" }} {...props} />
	) : (
		<Input allowClear style={{ width: "100%" }} {...props} />
	);
};

const ResponsiveInputWithLabel = withLabelSize(ResponsiveInput);

export default ResponsiveInputWithLabel;
