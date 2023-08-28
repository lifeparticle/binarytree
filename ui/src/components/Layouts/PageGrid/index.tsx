import { Col, Row } from "antd";
import React from "react";

interface PageGridPropsType {
	children: React.ReactNode;
}

const PageGrid: React.FC<PageGridPropsType> = ({ children }) => {
	const [children1, children2] = React.Children.toArray(children);

	return (
		<Row gutter={[16, 16]}>
			<Col xs={24} sm={24} md={24} lg={12}>
				{children1}
			</Col>
			<Col xs={24} sm={24} md={24} lg={12}>
				{children2}
			</Col>
		</Row>
	);
};

export default PageGrid;
