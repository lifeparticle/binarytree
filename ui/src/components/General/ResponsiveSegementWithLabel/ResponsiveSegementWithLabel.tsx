import { Segmented } from "antd";
import { FC } from "react";
import { withLabelSize } from "components/Hoc";

interface Option {
	value: string;
	label: string;
}

interface SegmentComponentProps {
	label?: string;
	value: string;
	onChange: (value: string | number) => void;
	options: Option[];
}

const ResponsiveSegment: FC<SegmentComponentProps> = (props) => {
	return <Segmented {...props} />;
};

const ResponsiveSegementWithLabel = withLabelSize(ResponsiveSegment);

export default ResponsiveSegementWithLabel;
