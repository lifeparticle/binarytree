import { Col, Row } from "antd";
import { Children, FC } from "react";

interface InputGridProps {
	children: React.ReactNode;
	className?: string;
}

const InputGrid: FC<InputGridProps> = ({ children, className }) => {
	const childElements = Children.toArray(children);

	return (
		<Row gutter={[16, 0]} className={className}>
			{childElements.map((child, index) => (
				<Col key={child.id} xs={24} sm={24} md={24} lg={12}>
					{child}
				</Col>
			))}
		</Row>
	);
};

export default InputGrid;
