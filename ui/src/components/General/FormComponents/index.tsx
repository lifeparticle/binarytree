import {
	Input,
	InputNumber,
	Segmented,
	Select,
	Button as AntButton,
	ButtonProps,
} from "antd";
import React from "react";
import withLabelSize from "components/Hoc/withLabelSize";
import {
	InputComponentPropsType,
	SegmentComponentPropsType,
	SelectComponentPropsType,
} from "./utils/types";
import withSize from "components/Hoc/withSize";

const ResponsiveSelect: React.FC<SelectComponentPropsType> = (props) => {
	return <Select {...props} />;
};

const ResponsiveSegment: React.FC<SegmentComponentPropsType> = (props) => {
	return <Segmented {...props} />;
};

const ResponsiveInput: React.FC<InputComponentPropsType> = (props) => {
	return props.type === "number" ? (
		<InputNumber style={{ width: "100%" }} {...props} />
	) : (
		<Input allowClear style={{ width: "100%" }} {...props} />
	);
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return <AntButton {...props}>{children}</AntButton>;
};

const ResponsiveSelectWithLabel = withLabelSize(ResponsiveSelect);
const ResponsiveSegementWithLabel = withLabelSize(ResponsiveSegment);
const ResponsiveInputWithLabel = withLabelSize(ResponsiveInput);
const ResponsiveButton = withSize(Button);

export {
	ResponsiveSelectWithLabel,
	ResponsiveSegementWithLabel,
	ResponsiveInputWithLabel,
	ResponsiveButton,
};
