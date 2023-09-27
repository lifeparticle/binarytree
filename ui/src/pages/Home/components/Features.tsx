import React from "react";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import Icon from "components/General/Icon";
import { FEATURES } from "pages/Home/utils/constants";
import style from "pages/Home/Home.module.scss";
import { useNavigate } from "react-router-dom";

const Features: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Row gutter={[16, 16]}>
			<Col xs={24} lg={8} className={style.home__features}>
				<Space direction="vertical">
					<Typography.Title level={2}>
						BinaryTree comes packed with some awesome features
					</Typography.Title>
					<Typography.Paragraph>
						For everyday development of contemporary applications,
						you might require some innovative tools. BinaryTree can
						streamline your application development process
					</Typography.Paragraph>

					<Button>Get Started</Button>
				</Space>
			</Col>

			<Col xs={23} lg={16}>
				<Row gutter={[16, 16]}>
					{FEATURES.map((feature) => (
						<Col xs={24} md={12} lg={12} xl={8} key={feature.id}>
							<Card
								onClick={() => navigate(feature.link)}
								hoverable
								className={style.home__features_card}
							>
								<Space direction="vertical">
									<Icon name={feature.icon} size={40} />
									<Space direction="vertical" size="middle">
										<Typography.Title level={4}>
											{feature.title}
										</Typography.Title>
										<Typography.Text>
											{feature.description}
										</Typography.Text>
									</Space>
								</Space>
							</Card>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};

export default Features;
