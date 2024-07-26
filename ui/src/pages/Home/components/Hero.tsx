import { FC } from "react";
import style from "pages/Home/Home.module.scss";
import { Typography, Image } from "antd";
import hero from "assets/Home/hero.png";
import { Icon, ResponsiveButton } from "components/General";
import { useModal } from "hooks";

const { Title } = Typography;

const Hero: FC = () => {
	const { handleModalOpen } = useModal();

	return (
		<section className={style.home__hero}>
			<Title>
				We Provide an Array of Developer Productivity Tools Designed to
				Help You Save Time
			</Title>
			<div className={style.home__hero_buttons}>
				<ResponsiveButton onClick={handleModalOpen} type="primary">
					Explore Features
				</ResponsiveButton>
				<ResponsiveButton
					className="button-right-icon"
					onClick={() =>
						window.open(
							"https://github.com/lifeparticle/binarytree/issues",
							"_blank",
							"noopener"
						)
					}
				>
					Request Features <Icon name="MoveUpRight" />
				</ResponsiveButton>
			</div>
			<Image
				src={hero}
				alt="BinaryTree: Developer Productivity Tools"
				preview={false}
				style={{
					maxHeight: "40dvh",
				}}
			/>
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
