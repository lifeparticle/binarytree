import { Select } from "antd";
import { FC } from "react";
import { withLabelSize } from "components/Hoc";

interface Option {
	value: string;
	label: string;
	index?: any;
}

interface SelectComponentProps {
	options: Option[];
	label?: string;
	value?: string;
	defaultActiveFirstOption?: boolean;
	onSelect?: (value: string, option: Option) => void;
	disabled?: boolean;
}

const ResponsiveSelect: FC<SelectComponentProps> = (props) => {
	return <Select {...props} />;
};

const ResponsiveSelectWithLabel = withLabelSize(ResponsiveSelect);
export default ResponsiveSelectWithLabel;
