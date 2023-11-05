import { Select } from "antd";
import React from "react";
import { withLabelSize } from "components/Hoc";

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

const ResponsiveSelect: React.FC<SelectComponentProps> = (props) => {
	return <Select {...props} />;
};

const ResponsiveSelectWithLabel = withLabelSize(ResponsiveSelect);
export default ResponsiveSelectWithLabel;
