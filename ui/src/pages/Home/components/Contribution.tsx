import React from "react";
import style from "pages/Home/Home.module.scss";
import { Space, Typography } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";

const Contribution: React.FC = () => {
	const onClick = (url: string) => {
		window.open(url, "_blank", "noopener");
	};
	return (
		<section className={style.home__contribution}>
			<Space direction="vertical" align="center">
				<Typography.Title>Join our community</Typography.Title>
				<Typography.Text>
					Join our open-source community and help shape the future of
					Modern web
				</Typography.Text>
				<Space direction="horizontal">
					<ResponsiveButton
						onClick={() =>
							onClick(
								"https://github.com/lifeparticle/binarytree"
							)
						}
					>
						Github Discussion
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
		</section>
	);
};

export default Contribution;
