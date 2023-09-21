import React from "react";
import style from "pages/Home/Home.module.scss";
import { Card, Col, Row, Space } from "antd";
import { APP_VALUES } from "pages/About/utils/constants";
import verification from "assets/home/verification.svg";
import share from "assets/home/share.svg";
import detection from "assets/home/detection.svg";
import { Typography } from "antd";

const Values: React.FC = () => {
	return (
		<Space direction="vertical" size={"large"}>
			<Typography.Title className={style.home__values}>
				Value
			</Typography.Title>
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={8}>
					<Card cover={<img src={share} alt="logo" height={200} />}>
						{APP_VALUES[0]}
					</Card>
				</Col>

				<Col xs={24} lg={8}>
					<Card
						cover={
							<img src={verification} alt="logo" height={200} />
						}
					>
						{APP_VALUES[1]}
					</Card>
				</Col>

				<Col xs={24} lg={8}>
					<Card
						cover={<img src={detection} alt="logo" height={200} />}
					>
						{APP_VALUES[2]}
					</Card>
				</Col>
			</Row>
		</Space>
	);
};

export default Values;
