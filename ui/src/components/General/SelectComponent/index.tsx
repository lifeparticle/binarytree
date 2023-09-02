import { Form, Select } from "antd";
import React from "react";
import { SelectComponentPropsType } from "./utils/types";
import useGetSize from "lib/utils/hooks/useGetSize";

const SelectComponent: React.FC<SelectComponentPropsType> = (props) => {
	const { size } = useGetSize();

	return (
		<Form.Item label="Output Format">
			<Select size={size} {...props} />
		</Form.Item>
	);
};

export default SelectComponent;
