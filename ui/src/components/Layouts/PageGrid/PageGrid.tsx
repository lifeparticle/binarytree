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
			{childElements.map((child) => (
				<Col key={getKey(child)} xs={24} sm={24} md={24} lg={12}>
					{child}
				</Col>
			))}
		</Row>
	);
};

// Function to generate unique keys based on child content
const getKey = (child: React.ReactNode): string => {
    // Example: Generate a unique key based on child content
    return `${child}`;
};

export default PageGrid;
