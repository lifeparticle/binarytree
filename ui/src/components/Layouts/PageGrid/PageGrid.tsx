import { Col, Row } from "antd";
import React, { FC } from "react";

interface PageGridProps {
	children: React.ReactNode;
	className?: string;
}

const PageGrid: FC<PageGridProps> = ({ children, className }) => {
	const childElements = React.Children.toArray(children);

	return (
		<Row gutter={[16, 16]} className={className}>
			{childElements.map((child, index) => (
				<Col key={child.id} xs={24} sm={24} md={24} lg={12}>
					{child}
				</Col>
			))}
		</Row>
	);
};

export default PageGrid;
