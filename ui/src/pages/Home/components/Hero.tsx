import { FC } from "react";
import style from "pages/Home/Home.module.scss";
import { Typography, Image, Space, Card } from "antd";
import hero from "assets/Home/hero.webp";
import { FEATURE_DATA } from "data/featureData";
import { ResponsiveButton } from "components/General";
import { useModal } from "hooks";
import { STATS_DATA } from "pages/Home/statsData";

const { Text } = Typography;
const { Title } = Typography;

const Hero: FC = () => {
	const { handleModalOpen } = useModal();

	return (
		<section className={style.home__hero}>
			<Title>
				We Provide an Array of Developer Productivity Tools Designed to
				Help You Save Time
			</Title>
			<Space direction="horizontal">
				<ResponsiveButton onClick={handleModalOpen} type="primary">
					Explore Features
				</ResponsiveButton>
				<ResponsiveButton
					onClick={() =>
						window.open(
							"https://github.com/lifeparticle/binarytree/issues",
							"_blank",
							"noopener"
						)
					}
				>
					Request Features
				</ResponsiveButton>
			</Space>
			<Image
				src={hero}
				alt="BinaryTree: Developer Productivity Tools"
				preview={false}
				style={{
					maxHeight: "40dvh",
				}}
			/>
			<div className={style.home__hero__stats_container}>
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
			<Title level={2}>
				With an{" "}
				<a
					href="https://github.com/users/lifeparticle/projects/2"
					target="_blank"
				>
					ever-growing number of features
				</a>{" "}
				, our platform is constantly evolving to meet the needs of
				developers like you
			</Title>
		</section>
	);
};

export default Hero;
