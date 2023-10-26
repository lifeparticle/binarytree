import React from "react";
import { Card, Space, Typography, Image } from "antd";
import Icon from "components/General/Icon";
import { FEATURES } from "pages/Home/utils/constants";
import style from "pages/Home/Home.module.scss";
import { Link } from "react-router-dom";

import features from "assets/Home/features.svg";

const Features: React.FC = () => {
	return (
		<div className={style.home__features}>
			<div className={style.home__features_cover}>
				<div>
					<Typography.Title level={3}>
						BinaryTree comes packed with some awesome features
					</Typography.Title>
					<Typography.Title level={4}>
						For modern app development, tools like BinaryTree can
						significantly enhance and streamline your workflow.
					</Typography.Title>
				</div>
				<Image
					src={features}
					alt="BinaryTree: Developer Productivity Tools"
					preview={false}
					height={"40vh"}
				/>
			</div>
			<div className={style.home__features_cards}>
				{FEATURES.map((feature) => (
					<div
						key={feature.id}
						className={style.home__features_cards_card}
					>
						<Link to={feature.link}>
							<Card
								bordered={false}
								hoverable
								className={
									style.home__features_cards_card_content
								}
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
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
