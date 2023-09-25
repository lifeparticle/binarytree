import React from "react";
import style from "pages/Home/Home.module.scss";
import { Typography, Image } from "antd";
import { FEATURE_DATA } from "pages/About/utils/constants";
import hero from "assets/home/hero.svg";
const { Title } = Typography;
const Hero: React.FC = () => {
	return (
		<section className={style.home__hero}>
			<div className={style.home__hero_text}>
				<Title>Your Mate in Software Development</Title>
				<Typography.Paragraph
					className={style.about__intro_wrapper_text}
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
			<Image
				style={{
					display: "flex",
				}}
				src={hero}
				alt="BinaryTree: Developer Productivity Tools"
				className={style.home__hero_image}
				preview={false}
			/>
		</section>
	);
};

export default Hero;
