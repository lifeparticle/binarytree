import {
	Input,
	InputNumber,
	Segmented,
	Select,
	Button as AntButton,
	Dropdown,
} from "antd";
import React, { ReactNode } from "react";
import withLabelSize from "components/Hoc/withLabelSize/withLabelSize";
import withSize from "components/Hoc/withSize/withSize";
import { DropdownButtonProps } from "antd/es/dropdown";
interface Option {
	value: string;
	label: string;
}

interface SelectComponentProps {
	label?: string;
	value?: string;
	defaultActiveFirstOption?: boolean;
	onSelect?: (value: string, option: Option) => void;
	options: Option[];
}

interface SegmentComponentProps {
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

interface ButtonProps {
	children?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	icon?: React.ReactNode;
	shape?: "circle" | "round" | undefined;
	type?: "link" | "text" | "default" | "dashed" | "primary" | undefined;
}

const ResponsiveSelect: React.FC<SelectComponentProps> = (props) => {
	return <Select {...props} />;
};

const ResponsiveSegment: React.FC<SegmentComponentProps> = (props) => {
	return <Segmented {...props} />;
};

const ResponsiveInput: React.FC<InputComponentProps> = (props) => {
	return props.type === "number" ? (
		<InputNumber style={{ width: "100%" }} {...props} />
	) : (
		<Input allowClear style={{ width: "100%" }} {...props} />
	);
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <AntButton {...props}>{children}</AntButton>;
};

const DropdownButton: React.FC<DropdownButtonProps> = ({
	children,
	...props
}) => {
	return <Dropdown.Button {...props}>{children}</Dropdown.Button>;
};
const ResponsiveSelectWithLabel = withLabelSize(ResponsiveSelect);
const ResponsiveSegementWithLabel = withLabelSize(ResponsiveSegment);
const ResponsiveInputWithLabel = withLabelSize(ResponsiveInput);
const ResponsiveButton = withSize(Button);
const ResponsiveDropdownButton = withSize(DropdownButton);

export {
	ResponsiveSelectWithLabel,
	ResponsiveSegementWithLabel,
	ResponsiveInputWithLabel,
	ResponsiveButton,
	ResponsiveDropdownButton,
};
