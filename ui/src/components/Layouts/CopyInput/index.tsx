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
			<Row gutter={[8, 0]}>
				<Col sm={22} lg={21}>
					{children1}
				</Col>
				{children2 && (
					<Col sm={2} lg={3}>
						{children2}
					</Col>
				)}
			</Row>
		</Form.Item>
	);
};

export default CopyInput;
