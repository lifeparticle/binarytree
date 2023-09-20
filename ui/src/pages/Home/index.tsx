import Text from "components/General/Text/Text";
import style from "./Home.module.scss";
import { Card, Typography, Image, Space } from "antd";
import header from "assets/home/header.svg";
import share from "assets/home/share.svg";
import verification from "assets/home/verification.svg";
import detection from "assets/home/detection.svg";
import { APP_VALUES, FEATURE_DATA } from "pages/About/utils/constants";
import {
	ResponsiveButton,
	ResponsiveSegementWithLabel,
} from "components/General/FormComponents";
import Footer from "components/Layouts/Footer";
import PageGrid from "components/Layouts/PageGrid";
import { SEGMENTED_OPTIONS, DESCRIPTIONS } from "./utils/constants";
import { useState } from "react";

const onClick = (url: string) => {
	window.open(url, "_blank", "noopener");
};

const Home = () => {
	const [feature, setFeature] = useState(SEGMENTED_OPTIONS[0].value);

	return (
		<div className={style.home}>
			<div className={style.home__content}>
				<header className={style.home__content_header}>
					<div className={style.home___content_header_text}>
						<Text
							text="Your Mate in Software Development"
							level={1}
						/>
						<Typography.Paragraph
							className={style.about__intro_wrapper_text}
						>
							At binarytree.dev, we provide an array of developer
							productivity tools designed to help you save time.
							With an{" "}
							<a
								href="https://github.com/users/lifeparticle/projects/2"
								target="_blank"
							>
								ever-growing number of features
							</a>{" "}
							(currently <b>{FEATURE_DATA.length}</b>), our
							platform is constantly evolving to meet the needs of
							developers like you.
						</Typography.Paragraph>
					</div>

					<Image src={header} alt="logo" preview={false} />
				</header>
				<section className={style.home__content_features}>
					<Text text="Features" level={1} />
					<Card style={{ width: "100%" }}>
						<PageGrid>
							<div
								className={style.home__content_features_select}
							>
								<ResponsiveSegementWithLabel
									label=""
									options={SEGMENTED_OPTIONS}
									value={feature}
									onChange={(value: string | number) => {
										setFeature(value as string);
									}}
								/>
								{DESCRIPTIONS[feature].description}
								<ResponsiveButton>More</ResponsiveButton>
							</div>
							<Image
								src={DESCRIPTIONS[feature].image}
								alt="logo"
								preview={false}
							/>
						</PageGrid>
					</Card>
				</section>
				<section className={style.home__content_values}>
					<Text text="Values" level={1} />
					<div className={style.home__content_values_value}>
						<Card
							cover={<img src={share} alt="logo" height={200} />}
						>
							{APP_VALUES[0]}
						</Card>
						<Card
							cover={
								<img
									src={verification}
									alt="logo"
									height={200}
								/>
							}
						>
							{APP_VALUES[1]}
						</Card>
						<Card
							cover={
								<img src={detection} alt="logo" height={200} />
							}
						>
							{APP_VALUES[2]}
						</Card>
					</div>
				</section>
				<section className={style.home__content_footer}>
					<Card
						className={style.home__content_footer_content}
						title={
							<Text
								text="Begin streamlining your work and concentrate on what truly counts."
								level={2}
							/>
						}
					>
						<Space direction="vertical" align="center">
							<Typography.Paragraph>
								Embrace the efficiency that binarytree.dev
								brings to your development process. Our tools
								are designed to eliminate unnecessary
								complexities, allowing you to streamline your
								work and direct your focus towards the core of
								your projects. With binarytree.dev, you're not
								just coding faster - you're crafting with
								precision and focusing on what truly matters.
								Discover a smoother, smarter way to develop
								today.
							</Typography.Paragraph>
							<Space direction="horizontal">
								<ResponsiveButton
									type="primary"
									onClick={() => onClick("converter/base-64")}
								>
									Base64 converter
								</ResponsiveButton>
								<ResponsiveButton
									onClick={() =>
										onClick(
											"https://github.com/lifeparticle/binarytree/issues"
										)
									}
								>
									Request Features
								</ResponsiveButton>
							</Space>
						</Space>
					</Card>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
