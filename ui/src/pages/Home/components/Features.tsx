import React from "react";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import Icon from "components/General/Icon";
import { FEATURES } from "pages/Home/utils/constants";
import style from "pages/Home/Home.module.scss";

const Features: React.FC = () => {
	return (
		<Row gutter={[16, 16]}>
			<Col xs={24} lg={8} className={style.home__features}>
				<Space direction="vertical">
					<Typography.Title>
						Binary tree offers some cool feature
					</Typography.Title>
					<p>
						In daily uses you need some cool tools to develop modern
						application, hope binary tree help you to develop
						application smoothly
					</p>

					<Button>Get Started</Button>
				</Space>
			</Col>

			<Col xs={23} lg={16}>
				<Row gutter={[16, 16]}>
					{FEATURES.map((feature) => (
						<Col xs={24} lg={8}>
							<Card>
								<Icon name={feature.icon} size={40} />

								<Typography.Title level={4}>
									{feature.title}
								</Typography.Title>
								<Typography.Text>
									{feature.description}
								</Typography.Text>
							</Card>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};

export default Features;
