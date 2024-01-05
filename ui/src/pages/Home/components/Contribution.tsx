import { FC } from "react";
import style from "pages/Home/Home.module.scss";
import { Card, Space, Typography, Image } from "antd";
import { Icon, ResponsiveButton } from "components/General";
import { STATS_DATA } from "pages/Home/statsData";
import { useModal } from "hooks";
import features from "assets/Home/features.svg";

const { Title } = Typography;
const { Text } = Typography;

const Contribution: FC = () => {
	const { handleModalOpen } = useModal();

	return (
		<section className={style.home__contribution}>
			<Image
				src={features}
				alt="BinaryTree: Developer Productivity Tools"
				preview={false}
				height="25vh"
			/>
			<div className={style.home__features_cover}>
				<Title level={3}>
					BinaryTree comes packed with some awesome features. For
					modern app development, tools like BinaryTree can
					significantly enhance and streamline your workflow.
				</Title>
			</div>
			<div className={style.home__contribution__stats_container}>
				{STATS_DATA.map((feature) => (
					<Card
						bordered={false}
						key={feature.id}
						hoverable
						onClick={() =>
							feature.link === ""
								? handleModalOpen()
								: window.open(
										feature.link,
										"_blank",
										"noopener"
								  )
						}
					>
						<Space direction="vertical" size="middle">
							<Title keyboard>{feature.value}</Title>
							<Text strong>{feature.title}</Text>
						</Space>
					</Card>
				))}
			</div>
			<Typography.Title level={2}>Join our community</Typography.Title>
			<Typography.Paragraph>
				Join our open-source community and help shape the future of
				Modern web
			</Typography.Paragraph>
			<Space direction="horizontal">
				<ResponsiveButton
					className="button-right-icon"
					onClick={() =>
						window.open(
							"https://github.com/lifeparticle/binarytree",
							"_blank",
							"noopener"
						)
					}
				>
					Github Discussion <Icon name="MoveUpRight" />
				</ResponsiveButton>
			</Space>
		</section>
	);
};

export default Contribution;
