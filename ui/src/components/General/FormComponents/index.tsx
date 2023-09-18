import {
	Input,
	InputNumber,
	Segmented,
	Select,
	Button as AntButton,
	ButtonProps,
	Dropdown,
} from "antd";
import React from "react";
import withLabelSize from "components/Hoc/withLabelSize";
import {
	InputComponentProps,
	SegmentComponentProps,
	SelectComponentProps,
} from "./utils/types";
import withSize from "components/Hoc/withSize";
import { DropdownButtonProps } from "antd/es/dropdown";

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
