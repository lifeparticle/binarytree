import { Card, Col, Skeleton, Space, Typography } from "antd";
import { FC } from "react";

const { Title } = Typography;

const PackageSkeleton: FC = () => {
	return (
		<Col xs={24} lg={12}>
			<Card>
				<Skeleton loading={true}>
					<Space>
						<Title level={3}>Loading...</Title>
					</Space>
				</Skeleton>
			</Card>
		</Col>
	);
};

export default PackageSkeleton;
