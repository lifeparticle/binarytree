import { Row, Col, Form } from "antd";
import React from "react";
import { CopyInputProps } from "./utils/types";

const CopyInput: React.FC<CopyInputProps> = ({ children }) => {
	const [children1, children2] = React.Children.toArray(children);

	const firstChildProps = (children1 as React.ReactElement).props;

	return (
		<Form.Item
			label={firstChildProps.label}
			tooltip={firstChildProps.tooltip}
		>
			<Row gutter={[16, 0]}>
				<Col span={22}>{children1}</Col>
				<Col span={2}>{children2}</Col>
			</Row>
		</Form.Item>
	);
};

export default CopyInput;
