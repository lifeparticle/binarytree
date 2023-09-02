import { Form, Segmented } from "antd";
import React from "react";
import { SegmentComponentPropsType } from "./utils/types";
import useGetSize from "lib/utils/hooks/useGetSize";

const SegmentComponent: React.FC<SegmentComponentPropsType> = (props) => {
	const { size } = useGetSize();
	return (
		<Form.Item>
			<Segmented size={size} {...props} />
		</Form.Item>
	);
};

export default SegmentComponent;
