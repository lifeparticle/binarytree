import React from "react";
import style from "pages/Home/Home.module.scss";
import { Typography, Image, Space } from "antd";
import hero from "assets/Home/hero.webp";
import { FEATURE_DATA } from "data/featureData";
import { ResponsiveButton } from "components/General/FormComponents";
import { openLink } from "utils/helper-functions/string";
import useModal from "hooks/useModal";

const { Title } = Typography;
const Hero: React.FC = () => {
	const { handleModalOpen } = useModal();

	return (
		<section className={style.home__hero}>
			<Title className={style.home__hero_text_title}>
				Your Mate in Software Development
			</Title>
			<Image
				src={hero}
				alt="BinaryTree: Developer Productivity Tools"
				preview={false}
				style={{
					maxHeight: "40dvh",
				}}
			/>
			<Title className={style.home__hero_text_paragraph} level={3}>
				At binarytree.dev, we provide an array of developer productivity
				tools designed to help you save time. With an{" "}
				<a
					href="https://github.com/users/lifeparticle/projects/2"
					target="_blank"
				>
					ever-growing number of features
				</a>{" "}
				(currently <b>{FEATURE_DATA.length}</b>), our platform is
				constantly evolving to meet the needs of developers like you
			</Title>

			<Space direction="horizontal">
				<ResponsiveButton onClick={handleModalOpen} type="primary">
					Get Started
				</ResponsiveButton>
				<ResponsiveButton
					onClick={() =>
						openLink(
							"https://github.com/lifeparticle/binarytree/issues"
						)
					}
				>
					Request Features
				</ResponsiveButton>
			</Space>
		</section>
	);
};

export default Hero;
