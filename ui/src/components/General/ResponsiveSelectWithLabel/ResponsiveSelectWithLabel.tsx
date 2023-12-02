import { Select } from "antd";
import { FC } from "react";
import { withLabelSize } from "components/Hoc";

interface Option {
	value: string;
	label: string;
}

interface SelectComponentProps {
	options: Option[];
	label?: string;
	value?: string;
	defaultActiveFirstOption?: boolean;
	onSelect?: (value: string, option: Option) => void;
}

const ResponsiveSelect: FC<SelectComponentProps> = (props) => {
	return <Select {...props} />;
};

const ResponsiveSelectWithLabel = withLabelSize(ResponsiveSelect);
export default ResponsiveSelectWithLabel;
