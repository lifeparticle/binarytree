import { FC } from "react";
import { Card, Space, Typography, Image } from "antd";
import { FEATURES } from "pages/Home/constants";
import style from "pages/Home/Home.module.scss";
import { Link } from "react-router-dom";
import features from "assets/Home/features.svg";
import { Icon } from "components/General";

const { Text } = Typography;

const Features: FC = () => {
	return (
		<div className={style.home__features}>
			<div className={style.home__features_cover}>
				<div>
					<Text strong keyboard>
						BinaryTree comes packed with some awesome features. For
						modern app development, tools like BinaryTree can
						significantly enhance and streamline your workflow.
					</Text>
				</div>
				<Image
					src={features}
					alt="BinaryTree: Developer Productivity Tools"
					preview={false}
					height="40vh"
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
										<Text strong>{feature.title}</Text>
										<Text>{feature.description}</Text>
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
