import React from "react";
import style from "pages/Home/Home.module.scss";
import { Typography, Image } from "antd";
import hero from "assets/Home/hero.webp";
import { FEATURE_DATA } from "data/featureData";

const { Title } = Typography;
const Hero: React.FC = () => {
	return (
		<section className={style.home__hero}>
			<div className={style.home__hero_text}>
				<Title className={style.home__hero_text_title}>
					Your Mate in Software Development
				</Title>
				<Typography.Paragraph
					className={style.home__hero_text_paragraph}
				>
					At binarytree.dev, we provide an array of developer
					productivity tools designed to help you save time. With an{" "}
					<a
						href="https://github.com/users/lifeparticle/projects/2"
						target="_blank"
					>
						ever-growing number of features
					</a>{" "}
					(currently <b>{FEATURE_DATA.length}</b>), our platform is
					constantly evolving to meet the needs of developers like you
				</Typography.Paragraph>
			</div>

			<div className={style.home__hero_image}>
				<Image
					src={hero}
					alt="BinaryTree: Developer Productivity Tools"
					preview={false}
					width={"100%"}
					height={"100%"}
				/>
			</div>
		</section>
	);
};

export default Hero;
