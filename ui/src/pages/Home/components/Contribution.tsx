import { FC } from "react";
import style from "pages/Home/Home.module.scss";
import { Space, Typography } from "antd";
import { Icon, ResponsiveButton } from "components/General";

const Contribution: FC = () => {
	return (
		<section className={style.home__contribution}>
			<Space direction="vertical">
				<Typography.Title level={2}>
					Join our community
				</Typography.Title>
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
			</Space>
		</section>
	);
};

export default Contribution;
