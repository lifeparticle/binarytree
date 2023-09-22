import React from "react";
import style from "pages/Home/Home.module.scss";
import { Typography } from "antd";
import { FEATURE_DATA } from "pages/About/utils/constants";

const { Title } = Typography;
const Hero: React.FC = () => {
	return (
		<section className={style.home__hero}>
			<Title>Your Mate in Software Development</Title>
			<Typography.Paragraph className={style.about__intro_wrapper_text}>
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
			</Typography.Paragraph>
		</section>
	);
};

export default Hero;
